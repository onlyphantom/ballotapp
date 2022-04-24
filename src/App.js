import { DAppProvider, Rinkeby, Kovan, Mainnet } from "@usedapp/core";
import { getDefaultProvider } from 'ethers'
import "./App.css";

import Wallet from './components/Wallet';

function App() {

  const config = {
    networks: [Rinkeby],
    readOnlyChainId: Rinkeby.chainId,
    readOnlyUrls: {
      [Mainnet.chainId]: getDefaultProvider('mainnet'),
      [Rinkeby.chainId]: `https://rinkeby.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`,
      [Kovan.chainId]: `https://kovan.infura.io/v3/${process.env.REACT_APP_INFURA_KEY}`
    },
    notifications: {
      expirationPeriod: 1000, //milliseconds
      checkInterval: 1000, // milliseconds
    }
  }

  return (

    <DAppProvider config={config}>
      <div className="App">
        <header className="App-header">
          <Wallet />
        </header>
      </div>
    </DAppProvider>
  );
}

export default App;
