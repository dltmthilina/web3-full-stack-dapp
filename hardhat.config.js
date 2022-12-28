require("@nomiclabs/hardhat-waffle");

task("accounts", "Prints the list of accounts", async(taskArgs, hre)=>{
  const accounts = await hre.ethers.getSigners()

  for(const account of accounts){
    console.log(account.addrss);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  paths:{
    artifacts:'./src/artifacts',
  },
  networks:{
    hardhat:{
      chainId:1337
    }
  },
  solidity: "0.8.17",
};
