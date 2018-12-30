# ALASKI 

## 1. 选题背景、依据

### 选题背景

赌，是人类的天性。据不完全统计，2016年全球博彩业总交易额为4500亿美金，2017年则达到了惊人的5000亿美金。这股热潮也蔓延到了区块链应用，Fomo3D、Dice2win、333ETH等，博彩类Dapp成为Dapp应用中的亮点。从表面上来看，区块链博彩公开透明，去中心化，没有商家操控，让博彩更加安全有序。但实际上目前区块链上的智能合约并没有想象中的那么美好，存在：1. “难以避免”的合约漏洞，2. 开发者的技术“后门”，两个主要的问题。

所以现在需要一些简单，开源的博彩合约的实现。

### 构思

在区块链上实现博彩Dapp，最关键的步骤是如何生成不可被预测，不可被攻破的随机数： 这里通过参与的每一个人提供一个他们想要的数字，然后将这些数字做异或操作，来生成这个随机数。

1. 部署合约的用户作为博彩的庄家，部署时发送的以太币作为庄家的本金，同时规定好各项时间参数。
2. 参与者在指定的时间之内将想要提供的数字（足够大，非零）与自身的地址混淆后进行keccak256哈希，再传到智能合约中。合约建立发送方地址和哈希值之间的映射。

3.    参与者在规定时间内（2步骤之后），将之前想要提供的数字传到合约中并附加赌注（所有参与者的赌注之和小于庄家本金），合约结合地址验证是否是之前提供的数字，是则保存，否则舍弃。


4.    参与者在规定时间内（3步骤之后），调用开奖函数，将所有人提供的数字的异或值与除了他提供的数字之外的所有数字的异或值进行比较，如果前者小于后者，则合约发送两倍的赌注回参与者。



这种实现首先使用每一个人提供一个数再做异或的方式，来使得生成的随机数无法被预知。同时分两步传输，使得攻击者无法在开奖之前从本地离线推测其他人提供的数值。

## 2. 使用说明

1. 开启本地geth在8545端口`--rpc --rpcport "8545"`，暴露API`-- rpcapi="db,eth,net,web3,personal,web3"`。
2. 使用remix将合约gamble.sol在本地链上部署。
3. 部署过后，将合约的地址复制到`js/bcp.js:8`的`contrct_addr`变量。
4. 双击index.html，输入本地账户的用户名，密码登入。

![登入界面](https://github.com/CastleOnTheHill/Alaski/blob/master/report_images/%E7%99%BB%E5%85%A5%E7%95%8C%E9%9D%A2.png?raw=true)

![界面1](https://github.com/CastleOnTheHill/Alaski/blob/master/report_images/%E7%95%8C%E9%9D%A21.png?raw=true)

5. 依次在规定时间内完成预下注、下注、最后开奖。

![界面2](https://github.com/CastleOnTheHill/Alaski/blob/master/report_images/%E7%95%8C%E9%9D%A22.png?raw=true)

## 3. 测试

### 1. 初始状态

登入成功之后我们可以看到，赌场的拥有者，和当前的赌池金额3个以太币，当前用户以及用户余额。

![初始状态](https://github.com/CastleOnTheHill/Alaski/blob/master/report_images/1%E5%88%9D%E5%A7%8B%E7%8A%B6%E6%80%81.jpg?raw=true)

### 2.预下注

当时间轮到预下注时，填一个自己想要的数字，点击预下注按钮后，页面会发起一个调用合约函数的交易。

![预下注1](https://github.com/CastleOnTheHill/Alaski/blob/master/report_images/2.1%E9%A2%84%E4%B8%8B%E6%B3%A8.jpg?raw=true)

等到矿工将这些交易确认打包，生成一个新的区块之后，根据监听函数的返回信息，给客户相应的提示：预下注成功或失败。

![预下注2](https://github.com/CastleOnTheHill/Alaski/blob/master/report_images/2.2%E9%A2%84%E4%B8%8B%E6%B3%A8.jpg?raw=true)



### 3. 下注

当预下注成功之后，并且在下注的时间段内，客户再次输入之前选择的数字，和想要下注的金额（单位为ETH），点击REALBET按钮后，页面发起一个调用合约函数的交易。

![下注1](https://github.com/CastleOnTheHill/Alaski/blob/master/report_images/3.1%E4%B8%8B%E6%B3%A8.jpg?raw=true)

等到矿工将这些交易确认打包，生成一个新的区块之后，根据监听函数的返回信息，给客户相应的提示：下注成功或失败。

![预下注2](https://github.com/CastleOnTheHill/Alaski/blob/master/report_images/3.2%E4%B8%8B%E6%B3%A8.jpg?raw=true)

### 4. 开奖

当前两步成功完成之后，并且在开奖的时间段内，用户点击LOTTERY按钮后，页面发起一个调用合约函数的交易。

![开奖1](https://github.com/CastleOnTheHill/Alaski/blob/master/report_images/4.1%E5%BC%80%E5%A5%96.jpg?raw=true)

等到矿工将这些交易确认打包，生成一个新的区块之后，根据监听函数的返回信息，给客户相应的提示：开奖结果，赢了或是输了。

![开奖2](https://github.com/CastleOnTheHill/Alaski/blob/master/report_images/4.2%E5%BC%80%E5%A5%96.jpg?raw=true)

### 5. 结束状态

因为上面的演示中用户输给了庄家1ETH，可以看到此时赌池的金额相对开始的状态多了1ETH。

![结束状态](https://github.com/CastleOnTheHill/Alaski/blob/master/report_images/5%E7%BB%93%E6%9D%9F%E7%8A%B6%E6%80%81.jpg?raw=true)

