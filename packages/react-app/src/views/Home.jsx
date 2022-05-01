import React from "react";
import logo from "../logo.jpeg"
const feature = { padding: '10px'};
const featureTitle = { color: 'white', textDecoration: 'underline', fontWeight: 'bold', textTransform: 'uppercase'}

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Home({ yourLocalBalance, readContracts, provider, signer }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'100vh', flexDirection: 'column'}}>
      <img width="150px" src={logo} style={{borderRadius: '50%'}} alt="square poa logo" />
      {/* <h1>OPEN POA</h1> */}
      <br></br>
      <br></br>
      <div>
        <div> Symbol: POA</div>
        <div> Chain ID: 99</div>
        <div> RPC URL: http://143.198.77.160</div>
      </div>
      <br></br>
      <button onClick={()=>{
        console.log('!', provider, signer)
        // provider.sendSomething(
        //   {
        //     "jsonrpc": "2.0",
        //     "method": "wallet_addEthereumChain",
        //     "params": [
        //         {
        //             "chainId": "0x64",
        //             "chainName": "xDAI Chain",
        //             "rpcUrls": [
        //                 "https://dai.poa.network"
        //             ],
        //             "iconUrls": [
        //                 "https://xdaichain.com/fake/example/url/xdai.svg",
        //                 "https://xdaichain.com/fake/example/url/xdai.png"
        //             ],
        //             "nativeCurrency": {
        //                 "name": "xDAI",
        //                 "symbol": "xDAI",
        //                 "decimals": 18
        //             },
        //             "blockExplorerUrls": [
        //                 "https://blockscout.com/poa/xdai/"
        //             ]
        //         }
        //     ],
        //     "id": 0
        // }
        // )
      }}>add to metamask</button>
      <br></br>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '50px' }}>
        <div style={feature}>
          <a href="/explorer">explorer</a>
        </div>
        <div style={feature}>
          <a>netstats</a>
        </div>
        <div style={feature}>
          <a href="https://t.me/OpenPOA">telegram</a>
        </div>
        <div style={feature}>
          <a href="https://uniswap.org/">purchase</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
