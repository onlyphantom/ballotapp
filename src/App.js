import { useState, useEffect } from "react";
import Web3 from "web3";
import { DAppProvider, Rinkeby } from "@usedapp/core";

import "./App.css";
import Wallet from "./components/Wallet";

const config = {
  networks: [Rinkeby],
  notifications: {
    expirationPeriod: 1000, //milliseconds
    checkInterval: 1000, //milliseconds
  },
};

function App() {
  // const [account, setAccount] = useState();
  // const [network, setNetwork] = useState();
  // const [balance, setBalance] = useState();

  // when app first mount, perform an action
  // const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  // useEffect(() => {
  //   loadAccounts();
  // }, []);

  // useEffect(() => {
  //   loadBalance();
  // }, [account]);

  // async function loadBalance() {
  //   const network = await web3.eth.net.getNetworkType();
  //   const balance = await web3.eth.getBalance(account, "latest");

  //   setNetwork(network);
  //   setBalance((balance / 1e18).toFixed(4));
  // }

  // async function loadAccounts() {
  //   const accounts = await web3.eth.requestAccounts();
  //   setAccount(accounts[0]);
  // }

  return (
    <DAppProvider config={config}>
      <div className="App">
        <header className="App-header">
          <Wallet />
          <br />
          {/* <small>Your Account: {account}</small> */}
          {/* <small>
            Your Balance ({network}): {balance}
          </small> */}
        </header>
      </div>
    </DAppProvider>
  );
}

export default App;
