---
sidebar_position: 1
slug: /connect-to-asset-hub
---

import {WestendNetworkButton} from '@site/src/components/NetworkButton';

# Connect to Asset Hub

1. Install MetaMask Wallet.

   Install the [MetaMask](https://support.metamask.io/getting-started/getting-started-with-metamask/#how-to-install-metamask) browser extension and create an Ethereum account. MetaMask will allow REMIX to interface with the Westend network.

2. Connect your Metamask wallet to Asset-Hub using the following link:

<WestendNetworkButton />

3. Request Westend (WND) Tokens.

   Open the [Westend Faucet](https://faucet.polkadot.io/westend?parachain=1000).

   Enter your MetaMask address and click **Send** to request Westend tokens.

# Manually Connect to Asset Hub

Open the MetaMask extension, Go to Settings (the gear icon in the top right corner) and click on "Networks" then "Add Network". See [this guide][add-network] for more info on how to manually add a custom network to MetaMask.

For the Westend network, use the following settings:

- Network name: Asset-Hub Westend Testnet
- RPC URL URL: `https://westend-asset-hub-eth-rpc.polkadot.io`
- Chain ID: `420420421`
- Currency Symbol: `WND`
- Block Explorer URL: `https://assethub-westend.subscan.io`

[add-network]: https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/#adding-a-network-manually
