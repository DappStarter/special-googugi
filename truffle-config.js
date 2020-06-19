require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth oval unknown guess private surge gate'; 
let testAccounts = [
"0x0421b26e7dcd51df00b579fb2ab2aa394faaf774210aa2e929251cbab2a5caaf",
"0x1f3054fb8de0c6551c0717473edfada30e4b7afa6ae6f35bbad25dae50bdc7be",
"0x7be4c067bfdc0774a0c7eb9cf45e6a02ab60c6b71bbf15f0a7ed659f5c0ec998",
"0xbadb8183d5e388372278a7191e30adef8957b4a3d5c554af9aba560e6d768766",
"0xcca13889ce41848769cbc27bc9fcc3671f555bbe62959b1fcbda700e4509e356",
"0x00e5a1304cdb9b222a980c01f354db1a86f9b45761e9ff75d11801001faef8eb",
"0xb02ed78fbf278fa6679928e06f6086827b8f372ade4184760972d26cf142c4ca",
"0x785ebd6556b23467a403f855a914613a7a64101406f41ca25d0a71404ab59543",
"0x9d116611b49ab592e1836e10366c7e04f557a5e2c2cc4b2e4aaadcb7b2ce0eb7",
"0x11c268146d80f0eefdadb97a6b8a91fd2af56aa4def83bed6b58585ecfb34d15"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
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
            version: '^0.5.11'
        }
    }
};
