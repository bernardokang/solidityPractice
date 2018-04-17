const path = require('path');
const fs = require('fs'); // fs=file system
const solc = require('solc');

const lottoPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
//__dirname 커런트 작업폴더옵션, 'contracts'라는 폴더의 'Inbox.sol'를 셋팅

const source = fs.readFileSync(lottoPath, 'utf8');
// 인코딩 옵션

// console.log(solc.compile(source, 1));
module.exports = solc.compile(source, 1).contracts[':Inbox'];
