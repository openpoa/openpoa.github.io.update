import React from "react";
import logo from "../logo.jpeg"
const feature = { padding: '10px'};
const featureTitle = { color: 'white', textDecoration: 'underline', fontWeight: 'bold', textTransform: 'uppercase'}

function Home() {
  // you can also use hooks locally in your component of choice
  // in this case, let's keep track of 'purpose' variable from our contract

  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height:'100vh', flexDirection: 'column'}}>
      <img width="150px" src={logo} style={{borderRadius: '50%'}} alt="square poa logo" />
      <br></br>
      <br></br>
      {/* <h1>OPEN POA</h1> */}
      {/* <p>EVM compatible chain used in and shares technology with other powerful networks such as Kovan & Gnosis</p> */}
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
          <p>Transactions on OpenPOA consume less gas & are validated quicker than ETH sharing tech with Gnosis & Kovan networks</p>
        </div>
        <div style={feature}>
          <h3 style={featureTitle}>Infrastructure</h3>
          <p>Block explorer powered by Blockscout client & load-balanced RPC nodes. Run your own for increased speed and dependability.</p>
        </div>
        <div style={feature}>
          <h3 style={featureTitle}>Innovation</h3>
          <p>Built using tech later applied to xDai & Gnosis. Team and network incentivized to find new advancements to bring on chain.</p>
        </div>
      </div>
      {/* <div>
        <div> Network Name: POA </div>
        <div> New RPC URL: [tbd]</div>
        <div> Chain ID: 99</div>
        <div> Currency Symbol: POA</div>
      </div> */}
      {/* <button>add to metamask</button> */}
      <br></br>
      <br></br>
      <div>
      <a target="_blank" href="https://t.me/OpenPOA">telegram</a>
      {/* <a href="https://uniswap.org/">purchase</a> */}
      </div>
      {/* <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '50px' }}>
        <div style={feature}>
          <a href="/explorer">explorer</a>
        </div>
        <div style={feature}>
          <a>netstats</a>
        </div>
          <a href="https://t.me/OpenPOA">telegram</a>
          <a href="https://uniswap.org/">purchase</a>
      </div> */}
    </div>
  );
}

export default Home;
