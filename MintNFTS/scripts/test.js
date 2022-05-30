
// import React from "react";
const { useMoralisWeb3Api } = require("react-moralis");

const Web3Api = useMoralisWeb3Api();

const fetchNFTMetadata = async () => {
  const options = {
    address: "0x8091935bf7c77475920a965baf0e4af7e5ed1c6a",
    chain: "rinkeby",
  };
  const metaData = await Web3Api.token.getNFTMetadata(options);
  console.log(metaData);
};
fetchNFTMetadata();