
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks:{
    ropsten:{
      url:"https://eth-ropsten.alchemyapi.io/v2/10yePYMNXGS7nVF4ri7wbO6Yz29f6eT-",
      
      accounts: ['aa3ff6b91fe5ac5eca67b21b20c5a32bff67e7f546f1f800d283df6165bf8ddd']
    }
  }
}