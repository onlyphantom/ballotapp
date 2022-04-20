import React from 'react'
import { useEthers, useEtherBalance } from '@usedapp/core'
import { formatEther } from '@ethersproject/units'

const Wallet = () => {

    // If you need to use another connector than a browser wallet,
    // use the 'activate' method from useEthers.
    const { activateBrowserWallet, account } = useEthers()
    const etherBalance = useEtherBalance(account)

    function changeBackground(e) {
        e.target.style.background = 'chocolate';
    }
    function resetBackground(e) {
        e.target.style.background = 'antiquewhite';
    }

    return (
        <div>
            <h3>Wallet</h3>
            {account
                ? <div>
                    <p>Your account: {account}</p>
                    {
                        etherBalance && <p>Balance: {formatEther(etherBalance)}</p>
                    }
                </div>
                : <button onClick={() => activateBrowserWallet()}
                    style={{
                        borderRadius: '4px',
                        padding: '4px',
                        width: '160px',
                        height: '40px',
                        border: '1px solid black',
                        background: 'antiquewhite'
                    }}
                    onMouseOver={changeBackground}
                    onMouseLeave={resetBackground}
                >
                    Connect Wallet
                </button>
            }


        </div>
    )
}

export default Wallet