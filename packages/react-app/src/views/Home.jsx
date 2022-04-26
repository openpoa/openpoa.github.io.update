import React from "react";
import logo from "../logo.jpeg"
const feature = { padding: '10px'};
const featureTitle = { color: 'white', textDecoration: 'underline', fontWeight: 'bold', textTransform: 'uppercase'}

function Home() {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height:'100vh', flexDirection: 'column'}}>
      <img width="150px" src={logo} style={{borderRadius: '50%'}} alt="square poa logo" />
      {/* <h1>OPEN POA</h1> */}
      {/* <p>EVM compatible chain used in and shares technology with other powerful networks such as Kovan & Gnosis</p> */}
      {/* <div style={{display: 'flex', justifyContent: 'center', backgroundColor: '#5B2CA4', color: "white", padding: '20px'}}>
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
      </div> */}
      <br></br>
      <div>
        <div> Symbol: POA</div>
        <div> Chain ID: 99</div>
        <div> Network Name: OPOA </div>
        <div> New RPC URL: [tbd]</div>
      </div>
      <br></br>
      <button>add to metamask</button>
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
