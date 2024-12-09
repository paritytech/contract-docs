import React from 'react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { createAppKit } from '@reown/appkit'
import { useAppKit } from '@reown/appkit/react'

const projectId = 'c1455e18050fa3e0857a79ac38187ba5'

const metadata = {
  name: 'contracts-doc',
  description: 'Asset Hub Westend - Contracts Documentation',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png'],
}

const Westend = {
  id: 420420421,
  chainNamespace: 'eip155',
  chainId: 420420421,
  caipNetworkId: 'eip155:420420421',
  name: 'Asset Hub Westend',
  nativeCurrency: {
    name: 'Westie',
    symbol: 'WST',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://westend-asset-hub-eth-rpc.polkadot.io'],
    },
  },
}
// Set up Solana Adapter
export const ethersAdapter = new EthersAdapter()

// Create a AppKit instance
createAppKit({
  adapters: [ethersAdapter],
  networks: [Westend],
  metadata,
  projectId,
  features: {
    email: false,
    socials: [],
  },
})

export function WalletConnectButton() {
  return <appkit-button />
}
