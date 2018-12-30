pragma solidity ^0.4.0;
contract gamble {
    address public banker;
    uint public capital; 
    uint public startTime;
    uint public firstBetTime;
    uint public secondBetTime;
    uint public closeTime;
    uint public startXORnum;
    uint public duration;
    mapping(address => bytes32) public firstProvider; // sha3 of realProvider and address
    mapping(address => uint) public realProvider; // none zero
    mapping(address => uint) public money; // none zero and samll than capital    
    event gambleInit_result(address banker, uint value_num, uint start_time, uint first_time, uint second_time, uint close_time);
    event preBet_result(bool state);
    event realBet_result(bool state, uint value_num);
    event gambleStart_result(bool state, uint value_num);
    event gambleEnd_result(uint value_num);
    
    constructor(uint first, uint second, uint close, uint Initnum) public payable {
        banker = msg.sender;
        capital = msg.value;
        startTime = now;
        firstBetTime = first;
        secondBetTime = second; 
        closeTime = close;
        startXORnum = Initnum;
        duration = firstBetTime + secondBetTime + closeTime;
        emit  gambleInit_result(banker, capital, startTime, firstBetTime, secondBetTime,closeTime);
    }
    
    function preBet(uint t) public {
        require((now - startTime) % duration < firstBetTime);
        firstProvider[msg.sender] = keccak256(abi.encodePacked(t, msg.sender));
        emit preBet_result(true);
    }
    
    function realBet(uint num) public  payable{
        require((now - startTime) % duration < firstBetTime + secondBetTime && (now - startTime) % duration >= firstBetTime);
        require(msg.value > 1e15 && msg.value < capital);
        require(num != 0);
        require(firstProvider[msg.sender] != 0);
        bytes32 t = keccak256(abi.encodePacked(num, msg.sender));
        //bytes32 k2 = keccak256(msg.sender);
        //bytes32 t = keccak256(k1^k2); 
        if(t == firstProvider[msg.sender]) {
            realProvider[msg.sender] = num;
            capital = capital - msg.value;
            money[msg.sender] = money[msg.sender] + msg.value;
            startXORnum = startXORnum ^ num;
            emit realBet_result(true, msg.value);
        }
        else {
            emit realBet_result(false, msg.value);
        }
    }
    
    function gambleStart() public payable{
        require(realProvider[msg.sender] != 0);
        require((now - startTime) % duration < firstBetTime + secondBetTime + closeTime && (now - startTime) % duration >= firstBetTime + secondBetTime);
        if(startXORnum < startXORnum ^ realProvider[msg.sender]) {
            emit gambleStart_result(true, money[msg.sender] * 2);
            msg.sender.transfer(money[msg.sender] * 2);
            money[msg.sender] = 0;
        }
        else {
            capital = capital + money[msg.sender] * 2;
            emit gambleStart_result(false, money[msg.sender] * 2);
            money[msg.sender] = 0;
        }
    }
    
    function gambleEnd() public payable{
        require((now - startTime) % duration >= secondBetTime + closeTime); // before second betTime
        if(msg.sender == banker) {
            selfdestruct(banker);
            emit gambleEnd_result(address(this).balance);
        }
    }
}