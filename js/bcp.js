
window.APP = {
  gambleABI: [{ "constant": true, "inputs": [], "name": "banker", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "duration", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "money", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "firstBetTime", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "t", "type": "uint256" }], "name": "preBet", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "startXORnum", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "firstProvider", "outputs": [{ "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "gambleEnd", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "closeTime", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "startTime", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "gambleStart", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [], "name": "secondBetTime", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "capital", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "realProvider", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "num", "type": "uint256" }], "name": "realBet", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "inputs": [{ "name": "first", "type": "uint256" }, { "name": "second", "type": "uint256" }, { "name": "close", "type": "uint256" }, { "name": "Initnum", "type": "uint256" }], "payable": true, "stateMutability": "payable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "banker", "type": "address" }, { "indexed": false, "name": "value_num", "type": "uint256" }, { "indexed": false, "name": "start_time", "type": "uint256" }, { "indexed": false, "name": "first_time", "type": "uint256" }, { "indexed": false, "name": "second_time", "type": "uint256" }, { "indexed": false, "name": "close_time", "type": "uint256" }], "name": "gambleInit_result", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "state", "type": "bool" }], "name": "preBet_result", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "state", "type": "bool" }, { "indexed": false, "name": "value_num", "type": "uint256" }], "name": "realBet_result", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "state", "type": "bool" }, { "indexed": false, "name": "value_num", "type": "uint256" }], "name": "gambleStart_result", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "value_num", "type": "uint256" }], "name": "gambleEnd_result", "type": "event" }],
  gambleBin: "0x6080604052604051608080610ef183398101806040528101908080519060200190929190805190602001909291908051906020019092919080519060200190929190505050336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034600181905550426002819055508360038190555082600481905550816005819055508060068190555060055460045460035401016007819055507f67277ee1264def3e149d968a00f593dad36f6a08d767b3a7931502888b6db8d76000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600154600254600354600454600554604051808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001868152602001858152602001848152602001838152602001828152602001965050505050505060405180910390a150505050610d69806101886000396000f3006080604052600436106100db576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff1680630ab9db5b146100e05780630fb5a6b41461013757806315e1f7cd146101625780631676fd6f146101b95780632b5762ad146101e4578063347c81af14610211578063356af5691461023c5780635a0f57421461029b578063627749e6146102a557806378e97925146102d05780638df0d448146102fb578063c9ef2e5014610305578063d211fd1814610330578063d2f08b9d1461035b578063fce829c2146103b2575b600080fd5b3480156100ec57600080fd5b506100f56103d2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561014357600080fd5b5061014c6103f7565b6040518082815260200191505060405180910390f35b34801561016e57600080fd5b506101a3600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103fd565b6040518082815260200191505060405180910390f35b3480156101c557600080fd5b506101ce610415565b6040518082815260200191505060405180910390f35b3480156101f057600080fd5b5061020f6004803603810190808035906020019092919050505061041b565b005b34801561021d57600080fd5b50610226610587565b6040518082815260200191505060405180910390f35b34801561024857600080fd5b5061027d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061058d565b60405180826000191660001916815260200191505060405180910390f35b6102a36105a5565b005b3480156102b157600080fd5b506102ba61065c565b6040518082815260200191505060405180910390f35b3480156102dc57600080fd5b506102e5610662565b6040518082815260200191505060405180910390f35b610303610668565b005b34801561031157600080fd5b5061031a6109c4565b6040518082815260200191505060405180910390f35b34801561033c57600080fd5b506103456109ca565b6040518082815260200191505060405180910390f35b34801561036757600080fd5b5061039c600480360381019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506109d0565b6040518082815260200191505060405180910390f35b6103d0600480360381019080803590602001909291905050506109e8565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60075481565b600a6020528060005260406000206000915090505481565b60035481565b600354600754600254420381151561042f57fe5b0610151561043c57600080fd5b8033604051602001808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401925050506040516020818303038152906040526040518082805190602001908083835b6020831015156104d457805182526020820191506020810190506020830392506104af565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040518091039020600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081600019169055507f94ce2cdfa54aaf19cc95add3e5eb6e7985119ef59053f660994a00aaf64ef1796001604051808215151515815260200191505060405180910390a150565b60065481565b60086020528060005260406000206000915090505481565b6005546004540160075460025442038115156105bd57fe5b06101515156105cb57600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141561065a576000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16ff5b565b60055481565b60025481565b6000600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054141515156106b757600080fd5b600554600454600354010160075460025442038115156106d357fe5b061080156106f857506004546003540160075460025442038115156106f457fe5b0610155b151561070357600080fd5b600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546006541860065410156108a9577f4009242cd7e1750fb38e9db9605654aa76756762c05af696894cd511fc9cbc7760016002600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540260405180831515151581526020018281526020019250505060405180910390a13373ffffffffffffffffffffffffffffffffffffffff166108fc6002600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054029081150290604051600060405180830381858888f1935050505015801561085e573d6000803e3d6000fd5b506000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506109c2565b6002600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205402600154016001819055507f4009242cd7e1750fb38e9db9605654aa76756762c05af696894cd511fc9cbc7760006002600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020540260405180831515151581526020018281526020019250505060405180910390a16000600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505b565b60045481565b60015481565b60096020528060005260406000206000915090505481565b6000600454600354016007546002544203811515610a0257fe5b06108015610a2357506003546007546002544203811515610a1f57fe5b0610155b1515610a2e57600080fd5b66038d7ea4c6800034118015610a45575060015434105b1515610a5057600080fd5b60008214151515610a6057600080fd5b6000600102600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546000191614151515610ab657600080fd5b8133604051602001808381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401925050506040516020818303038152906040526040518082805190602001908083835b602083101515610b4e5780518252602082019150602081019050602083039250610b29565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390209050600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546000191681600019161415610cf45781600960003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550346001540360018190555034600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205401600a60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600654186006819055507f174cf0ac81cf6af85855a072305363f6d71f3e159ce4a0336e4f66235a6215e060013460405180831515151581526020018281526020019250505060405180910390a1610d39565b7f174cf0ac81cf6af85855a072305363f6d71f3e159ce4a0336e4f66235a6215e060003460405180831515151581526020018281526020019250505060405180910390a15b50505600a165627a7a72305820e03f1a2d7ec6826afdddef6f45f4cab0c5e7323aa31a4d12757150aa04bf6e8b0029",
  account : "0x3a3d3d7a0551ff6250fc8f08759d39b6ddc25676",
  password: "000000",
  // contract_addr: "0xec71a58a08d0da8a7dc5cbf73e430e78f6ac7af8",
  contract_addr: "0x4b1c2b68536491d2d2d6b73ee165c25367d6525f",
  // state : ["预下注", "下注", "开奖"],
  state_time : [],
  clock : function () {
    this.APP.time_left = this.APP.time_left - 1;
    if(this.APP.time_left < 0) {
      this.APP.current_state = (this.APP.current_state + 1) % 3;
      this.APP.time_left = this.APP.state_time[this.APP.current_state];
      switch (this.APP.current_state) {
        case 0:
          $("#pre_bet").prop("disabled", false).toggleClass("disabled_button");
          $("#lottery").prop("disabled", true).toggleClass("disabled_button");
          $("#prebet_div").css("background-color", "white");
          $("#lottery_div").css("background-color", "#141414");
          break;
        case 1:
          $("#bet").prop("disabled", false).toggleClass("disabled_button");
          $("#pre_bet").prop("disabled", true).toggleClass("disabled_button");
          $("#realbet_div").css("background-color", "white");
          $("#prebet_div").css("background-color", "#141414");
          break;
        case 2:
          $("#lottery").prop("disabled", false).toggleClass("disabled_button");
          $("#bet").prop("disabled", true).toggleClass("disabled_button");
          $("#lottery_div").css("background-color", "white");
          $("#realbet_div").css("background-color", "#141414");
          break;
        default:
          break;
      }
    }
    else {
      $(".clock_val").eq(this.APP.current_state).text(this.APP.time_left);
    }
  },
  unlock_account : function () {
    return web3.eth.personal.unlockAccount(this.account, this.password, 600);
  },
  infomation_init: function () {
    var gamble = new web3.eth.Contract(this.gambleABI, this.contract_addr);
    return gamble.methods.banker().call().then((value) => {
      this.banker = value;
    })
    .then(() => {
      return gamble.methods.capital().call().then((value) => {
        this.capital = value / Math.pow(10, 18);
      });
    })
    .then(() => {
      return gamble.methods.startTime().call().then((value) => {
        this.startTime = parseInt(value);
      });
    })
    .then(() => {
      return gamble.methods.firstBetTime().call().then((value) => {
        this.state_time[0] = parseInt(value);
      });
    })
    .then(() => {
      return gamble.methods.secondBetTime().call().then((value) => {
        this.state_time[1] = parseInt(value);
      });
    })
    .then(() => {
      return gamble.methods.closeTime().call().then((value) => {
        this.state_time[2] = parseInt(value);
        this.duration = this.state_time[0] + this.state_time[1] + this.state_time[2];
      });
    })
    .catch((error) => {
      console.log(error);
    });
  },
  infomation_flash : function () {
    var gamble = new web3.eth.Contract(this.gambleABI, this.contract_addr);
    return web3.eth.getBalance(window.APP.account)
    .then((value) => {
      $("#account_balance").text(web3.utils.fromWei(value) + " ETH");
    })
    .then(()=> {
      return gamble.methods.capital().call().then((value) => {
        this.capital = value / Math.pow(10, 18);
        $("#current_money").children("span").text(window.APP.capital);
      });
    });
  },
  contract_deploy: function (contract_arg, value_num) {
    var gamble = new web3.eth.Contract(this.gambleABI);
    return this.unlock_account()
    .then(() => {
      return gamble.deploy({
          data: this.gambleBin,
          arguments: contract_arg
        })
        .send({
          from: this.account,
          gas: 1500000,
          gasPrice: '30000000000000',
          value: value_num
        })
        .then(newContractInstance => {
          console.log(newContractInstance.options.address)
        });
    })
    .catch(error => console.log(error));
  },
  pre_bet: function (param) {
    var gamble = new web3.eth.Contract(this.gambleABI, this.contract_addr);
    return this.unlock_account()
    .then(() => {
      alert("Prebet tranasction is submitted, please wait.");
      return gamble.methods.preBet(param)
        .send({
          from: this.account,
          gas: 1500000,
          gasPrice: '30000000000000',
          value: 0
        })
        .on('receipt', (receipt) => {
          if(receipt.events.preBet_result != undefined && receipt.events.preBet_result.returnValues[0] == true) {
            alert("Prebet success !");
          }
          else {
            alert("Prebet failed, you may play in the wrong time, or run out of gas.");
          }
        })
        .on('error', (error) => alert("Prebet error : " + error))
    })
  },
  real_bet: function (param, value_num) {
    var gamble = new web3.eth.Contract(this.gambleABI, this.contract_addr);
    return this.unlock_account()
    .then(() => {
      alert("Realbet tranasction is submitted, please wait.");
      return gamble.methods.realBet(param)
        .send({
          from: this.account,
          gas: 1500000,
          gasPrice: '30000000000000',
          value: value_num
        })
        .on('receipt', (receipt) => {
          if (receipt.events.realBet_result != undefined) {
            if (receipt.events.realBet_result.returnValues[0] == true) {
              alert("Realbet success ! Amount of money " + web3.utils.fromWei(receipt.events.realBet_result.returnValues[1]) + " ETH.");
            }
            else {
              alert("Realbet failed, you should input the same number you pick in the Prebet turn.");
            }
          }
          else {
            alert("Realbet failed, you may play in the wrong time, or run out of gas.");
          }
        })
        .on('error', (error) => alert("Realbet error : " + error))
    })
    .then(()=> {
      return this.infomation_flash();
    })
  },
  gamble_start: function () {
    var gamble = new web3.eth.Contract(this.gambleABI, this.contract_addr);
    return this.unlock_account()
    .then(() => {
      alert("Lottery tranasction is submitted, please wait.");
      return gamble.methods.gambleStart()
        .send({
          from: this.account,
          gas: 1500000,
          gasPrice: '30000000000000',
          value: 0
        })
        .on('receipt', (receipt) => {
          if (receipt.events.gambleStart_result != undefined) {
            if(receipt.events.gambleStart_result.returnValues[0] == true)
              alert("Congratulations, you win " + web3.utils.fromWei(receipt.events.gambleStart_result.returnValues[1]) + " ETH !");
            else {
              alert("Sorry, may be next time.");
            }
          }
          else {
            alert("Lottery failed, you may play in the wrong time, or run out of gas.");
          }
        })
        .on('error', (error) => alert("Lottery error : " + error))
    })
    .then(() => {
      return this.infomation_flash();
    })
  },
  gamble_end: function () {
    var gamble = new web3.eth.Contract(this.gambleABI, this.contract_addr);
    return this.unlock_account()
    .then(() => {
      return gamble.methods.gambleEnd()
        .send({
          from: this.account,
          gas: 1500000,
          gasPrice: '30000000000000',
          value: 0
        })
        .then(receipt => { console.log(receipt); })
        .catch(error => console.log(error))
    })
  }
}

$(document).ready(() => {
  if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  }
  window.APP.infomation_init().then(() => {
    $("#owner").children("span").text(window.APP.banker);
    $("#current_money").children("span").text(window.APP.capital);
    var timestamp = Date.parse(new Date()) / 1000;
    var diff_time = timestamp - window.APP.startTime, time_value = window.APP.state_time;
    if (diff_time % window.APP.duration <= time_value[0]) {
      window.APP.current_state = 0;
      window.APP.time_left = time_value[0] - diff_time % window.APP.duration;
      $("#prebet_div").css("background-color", "white");
      $("#pre_bet").prop("disabled", false).toggleClass("disabled_button");
    }
    else if (diff_time % window.APP.duration > time_value[0] && diff_time % window.APP.duration < time_value[0] + time_value[1]) {
      window.APP.current_state = 1;
      $("#realbet_div").css("background-color", "white");
      $("#bet").prop("disabled", false).toggleClass("disabled_button");
      window.APP.time_left = time_value[0] + time_value[1] - diff_time % window.APP.duration;
    }
    else {
      window.APP.current_state = 2;
      $("#lottery_div").css("background-color", "white");
      $("#lottery").prop("disabled", false).toggleClass("disabled_button");
      window.APP.time_left = time_value[0] + time_value[1] + time_value[2] - diff_time % window.APP.duration;
    }
    setInterval(window.APP.clock, 1000);
  });

  $("#pre_bet").click(() => {
    window.APP.pre_bet(parseInt($("#pre_pick_num").val(), 10));
  });

  $("#bet").click(() => {
    window.APP.real_bet(parseInt($("#real_pick_num").val(), 10), parseInt(web3.utils.toWei($("#value_num").val())));
  });

  $("#lottery").click(() => {
    window.APP.gamble_start();
  });

  $("#log_in").click(() => {
    window.APP.account = $("#user_address").val();
    window.APP.password = $("#user_password").val();
    window.APP.unlock_account()
    .then(() => {
      $("#account_addr").text(window.APP.account);
      return web3.eth.getBalance(window.APP.account);
    })
    .then((value) => {
      $("#account_balance").text(web3.utils.fromWei(value) + " ETH");
      $("#sign_in").css({ "z-index": 0, "opacity" : 0});
      $("#Filter").css("filter", "blur(0px)");
    })
    .catch((error) => {
      alert(error);
    })
  })

  $("#log_out").click(()=> {
    $("#Filter").css("filter", "blur(5px)");
    $("#sign_in").css({ "z-index": 2, "opacity": 100 });
    $("#user_address").val("");
  });
});

