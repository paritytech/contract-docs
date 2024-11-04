import React from 'react'
import { Eip1193Provider } from 'ethers'
declare global {
  interface Window {
    ethereum?: Eip1193Provider
  }
}

type NetworkConfig = {
  chainId: string
  chainName: string
  currencyName: string
  currencySymbol: string
  iconUrls: string[]
  rpcUrls: string[]
  blockExplorerUrls: string[]
}

async function addEthereumChain({
  chainId,
  chainName,
  currencyName,
  currencySymbol,
  rpcUrls,
  iconUrls,
  blockExplorerUrls,
}: NetworkConfig) {
  const ethereum = window.ethereum
  if (!ethereum) {
    alert('Please install MetaMask!')
    return
  }

  // try to switch to the network
  try {
    await ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId }],
    })
  } catch (error) {
    console.log("failed to switch network, let's add the network")
  }

  try {
    await ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId,
          chainName,
          nativeCurrency: {
            name: currencyName,
            symbol: currencySymbol,
            decimals: 18,
          },
          iconUrls,
          rpcUrls: rpcUrls,
          blockExplorerUrls: blockExplorerUrls,
        },
      ],
    })
  } catch (error) {
    console.error(error)
  }
}

export const NetworkButton = (config: NetworkConfig) => {
  return (
    <button
      style={{
        backgroundImage: `url(/img/metamask.svg)`,
        backgroundRepeat: 'no-repeat',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundSize: '40px',
        backgroundPosition: '3px 50%',
        borderRadius: '9px',
        padding: '15px 15px 15px 50px',
      }}
      onClick={() => addEthereumChain(config)}
    >
      {config.chainName}
    </button>
  )
}