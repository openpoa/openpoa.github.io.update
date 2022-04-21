import { useContractReader } from "eth-hooks";
import { ethers } from "ethers";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpeg"
const feature = { padding: '10px'};
const featureTitle = { color: 'white', textDecoration: 'underline', fontWeight: 'bold', textTransform: 'uppercase'}

/**
 * web3 props can be passed from '../App.jsx' into your local view component for use
 * @param {*} yourLocalBalance balance on current network
 * @param {*} readContracts contracts from current chain already pre-loaded using ethers contract module. More here https://docs.ethers.io/v5/api/contract/contract/
 * @returns react component
 **/
function Home({ yourLocalBalance, readContracts }) {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract
  const purpose = useContractReader(readContracts, "YourContract", "purpose");

  return (
    <div style={{display: 'flex', alignItems: 'center', height:'100vh', flexDirection: 'column'}}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <img width="150px" src={logo} style={{borderRadius: '50%'}} alt="square poa image" />
      <br></br>
      <br></br>
      <br></br>
      <h1>OPEN POA</h1>
      <p>EVM compatible chain used in and shares technology with other powerful networks such as Kovan, xDai & Gnosis</p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#5B2CA4', color: "white", padding: '20px'}}>
        <div style={feature}>
          <h3 style={featureTitle}>Resilience</h3>
          <p>PoA Consensus prevents attacks from hindering development & bad actors while keeping value in network</p>
        </div>
        <div style={feature}>
          <h3 style={featureTitle}>Reliability</h3>
          <p>Known independent validators hosting using professional servers for secure & reliable, independent nodes</p>
        </div>
        <div style={feature}>
          <h3 style={featureTitle}>Speed & Cost</h3>
          <p>Transactions on OpenPOA consume less gas & are validated quicker than ETH</p>
        </div>
        <div style={feature}>
          <h3 style={featureTitle}>Infrastructure</h3>
          <p>Block explorer powered by Blockscout client & load-balanced RPC nodes</p>
        </div>
        <div style={feature}>
          <h3 style={featureTitle}>Innovation</h3>
          <p>Development team and network incentivized to find new advancements to bring on chain</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <div> Network Name: POA </div>
        <div> New RPC URL: [tbd]</div>
        <div> Chain ID: 99</div>
        <div> Currency Symbol: POA</div>
      </div>
      <br></br>
      <button>add to metamask</button>
      <br></br>
      <br></br>
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '50px' }}>
        <div style={feature}>
          <a>explorer</a>
        </div>
        <div style={feature}>
          <a>netstats</a>
        </div>
        <div style={feature}>
          <a>support</a>
        </div>
        <div style={feature}>
          <a>purchase</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
