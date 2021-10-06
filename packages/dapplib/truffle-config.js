require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn quality harvest merry flock swamp'; 
let testAccounts = [
"0xdea31f5341d696897efe50c244d970d7e02cb1da2a0ff1cd547c9698d36a0222",
"0x5df119ec8d99e55255539e14f1bc7c0a880580b475979a18b3a3bb212be6c2e7",
"0x668f5cb59ab47d1e76bf5f09f6f88796cc18314810729c78d542f35884618223",
"0x86d299c2a4c3d07846ccc0716568edc3ad270e3c124fa2531c7a34ac15031788",
"0xe769e5d8fd5a9cc8fb48b727afc719f47b40d31dbfcc5bc3cbcd789bff9b476a",
"0xdd326e27367f5ec44e17c7bba1196f90a76c43454b92c21ac62ed65e36d216a7",
"0x81e120e923a557e56397117c1f71fde52535361a9ee10aca2d587e749d22f62c",
"0xd1b43d0bc4982529f396ec264f1de99b78d80ff51cd311a30d9a3f4508f22e13",
"0xfd31f726fbed2517d23c4ac5ca34f81af53306ace9574face18a6dc315604b9c",
"0xe61a3418a1896f964b3825948b1c704539b053b9d3e337b1fc271bd049a7d6b9"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

