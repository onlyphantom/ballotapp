import { useState, useEffect } from "react";
import Web3 from "web3";
import "./App.css";

function App() {
  const [account, setAccount] = useState();
  const [network, setNetwork] = useState();
  const [balance, setBalance] = useState();

  // when app first mount, perform an action
  const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
  useEffect(() => {
    loadAccounts();
  }, []);

  useEffect(() => {
    loadBalance();
  }, [account]);

  async function loadBalance() {
    const network = await web3.eth.net.getNetworkType();
    const balance = await web3.eth.getBalance(account, "latest");

    setNetwork(network);
    setBalance((balance / 1e18).toFixed(4));
  }

  async function loadAccounts() {
    const accounts = await web3.eth.requestAccounts();
    setAccount(accounts[0]);
  }

  return (
    <div className="App">
      <header className="App-header">
        Decentralized Ballot
        <p>Your Account: {account}</p>
        <p>
          Your Balance ({network}): {balance}
        </p>
      </header>
    </div>
  );
}

export default App;
