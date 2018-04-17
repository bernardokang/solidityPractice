var Web3 = require('web3');
// console.log(Web3.version);
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
const {interface, bytecode} = require('./compile');



const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log('다음 account에서 deploy를 시도중', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data : bytecode, arguments:['hi']})
  .send({gas:'1000000', from:accounts[0]});

  console.log('컨트랙트 deploy가 다음에서 일어남..',result.options.address);
};

deploy(); // 명령 실행
