const Migrations = artifacts.require("ArtNFTS");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};