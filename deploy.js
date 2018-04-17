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
// 깨스값이 너무 적으면 또 안됨, 어카운트는 메타마스크에 존재하는 것들을 자동으로 받아온다.

// 저번 포스팅에서 주소값을 가져오는 방법은 옵션에서 가져올 수 있다고 했음
  console.log('컨트랙트 deploy가 다음에서 일어남..',result.options.address);
};

deploy(); // 명령 실행
