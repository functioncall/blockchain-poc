
const { Blockchain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

// Your private key goes here
const myKey = ec.keyFromPrivate('7c4c45907dec40c91bab3480c39032e90049f1a44f3e18c3e07c23e3273995cf');

// From that we can calculate your public key (which doubles as your wallet address)
const myWalletAddress = myKey.getPublic('hex');

// Create new instance of Blockchain class
const savjeeCoin = new Blockchain();

// Create a transaction & sign it with your key
const tx1 = new Transaction(myWalletAddress, 'address2', 100);
tx1.signTransaction(myKey);
savjeeCoin.addTransaction(tx1);

// Mine block
savjeeCoin.minePendingTransactions(myWalletAddress);

// Create second transaction
const tx2 = new Transaction(myWalletAddress, 'address1', 50);
tx2.signTransaction(myKey);
savjeeCoin.addTransaction(tx2);

// Mine block
savjeeCoin.minePendingTransactions(myWalletAddress);

console.log();
console.log(`Balance of xavier is ${savjeeCoin.getBalanceOfAddress(myWalletAddress)}`);

// Uncomment this line if you want to test tampering with the chain
// savjeeCoin.chain[1].transactions[0].amount = 10;

// Check if the chain is valid
console.log();
console.log('Blockchain valid?', savjeeCoin.isChainValid() ? 'Yes' : 'No');


// console.log('Mining block 1...')
// bitcoin.addBlock(new Block(1, '02/04/2020', { amount: 4}))

// console.log('Mining block 2...')
// bitcoin.addBlock(new Block(2, '03/04/2020', { amount: 32}))

// console.log('Mining block 3...')
// bitcoin.addBlock(new Block(3, '04/04/2020', { amount: 11}))

// console.log(JSON.stringify(bitcoin, null, 4))
// console.log('Is Blockchain valid: ' +bitcoin.isChainValid())

// bitcoin.createTransaction(new Transaction('address1', 'address2', 100))
// bitcoin.createTransaction(new Transaction('address2', 'address1', 50))

// console.log('Starting the miner...')
// bitcoin.minePendingTransactions('satoshi-address')

// console.log('Balance of Satoshi is: ', bitcoin.getBalanceOfAddress('satoshi-address'))