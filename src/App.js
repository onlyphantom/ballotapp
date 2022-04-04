import { useEffect, useState } from "react";

import Web3 from "web3";
import "./App.css";

function App() {

  const [account, setAccount] = useState(); // state variable to set account.
  const [network, setNetwork] = useState('')
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    async function loadAccounts() {
      const accounts = await web3.eth.requestAccounts();
      // const network = await web3.eth.net.getNetworkType();
      // const balance = await web3.eth.getBalance();
      
      // setNetwork(network);
      // setBalance(balance);
      setAccount(accounts[0]);
    }
    async function loadBalance() {
      const network = await web3.eth.net.getNetworkType();
      const balance = await web3.eth.getBalance(account)
      
      setNetwork(network);
      // convert wei to ether
      setBalance((balance/ 1e18).toFixed(4));
    }

    loadAccounts();
    loadBalance();
   }, []);

  return (
    <div className="App">
      <header className="App-header">Decentralized Ballot
      <p>Your Account: {account}</p>
      <p>Your Balance ({network}): {balance}</p>
      </header>
    </div>
  );
}

export default App;
