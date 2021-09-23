const path = require("path");

const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777",
    },
    rinkeby: {
      provider: function () {
        return new HDWalletProvider(
          `${process.env.MNEMONIC}`,
          `https://rinkeby.infura.io/v3/${process.env.RINKEBY_INFURA_ID}`
        );
      },
      network_id: 4,
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(
          `${process.env.MNEMONIC}`,
          `https://ropsten.infura.io/v3/${process.env.ROPSTEN_INFURA_ID}`
        );
      },
      network_id: 3,
    },
  },
  compilers: {
    solc: {
      version: "0.6.11",
      settings: {
        optimizer: {
          enabled: false,
          runs: 200,
        },
        evmVersion: "byzantium",
      },
    },
  },
};
