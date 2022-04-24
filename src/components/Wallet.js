import React from 'react'
import { useEthers, useEtherBalance, Rinkeby, Kovan, Mainnet } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'


const changeBackground = e => {
    e.target.style.background = 'chocolate';
}
const resetBackground = e => {
    e.target.style.background = 'antiquewhite';
}


const Wallet = () => {

    const { activateBrowserWallet, account, deactivate } = useEthers()
    const rinkebyBalance = useEtherBalance(account, { chainId: Rinkeby.chainId })
    const kovanBalance = useEtherBalance(account, { chainId: Kovan.chainId })
    const mainnetBalance = useEtherBalance(account, { chainId: Mainnet.chainId })


    return (
        <div>
            <h3>
                dApp Wallet
            </h3>
            {
                account
                    ?
                    <div>
                        <p>Your account: {account}</p> <br />
                        <button onClick={deactivate} className="btn" onMouseOver={changeBackground} onMouseOut={resetBackground}>
                            Disconnect
                        </button>
                        <hr />
                        {/* Display wallet balance */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px 20px' }}>
                            {
                                rinkebyBalance &&
                                <div className="bal">
                                    <h4>Rinkeby Balance</h4>
                                    {formatEther(rinkebyBalance)}
                                </div>
                            }
                            {
                                kovanBalance &&
                                <div className="bal" >
                                    <h4>Kovan Balance</h4>
                                    {formatEther(kovanBalance)}
                                </div>
                            }
                            {
                                mainnetBalance &&
                                <div className="bal">
                                    <h4>Mainnet Balance</h4>
                                    {formatEther(mainnetBalance)}
                                </div>
                            }
                        </div>
                    </div>
                    : <p>
                        Please connect wallet. <br />
                        <button
                            onClick={() => activateBrowserWallet()}
                            className="btn"
                            onMouseOver={changeBackground}
                            onMouseOut={resetBackground}
                        >
                            Connect Wallet
                        </button>
                    </p>
            }


        </div>
    )
}

export default Wallet