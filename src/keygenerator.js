const EC = require('elliptic').ec
const ec = new EC('secp256k1')

const key = ec.genKeyPair()
const publicKey = key.getPublic('hex')
const privateKey = key.getPrivate('hex')

console.log()
console.log('Private key:', privateKey)

console.log()
console.log('Public key', publicKey)


// Private key: bcc3a57627e8937a444dd43d97c8688bf3bc2013802b107c48e2a59f24f8f03d

// Public key 0441bea11cddc0d0a09bdd2e3a661a1c1ed17284b7be0fc868edc007c0b8d088ef1c3a00797a326d829de74efe9ca5efdce42a66d5707979df4ec7477e631c8a91