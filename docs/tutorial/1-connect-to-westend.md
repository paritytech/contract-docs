---
sidebar_position: 1
slug: /connect-to-westend
---

import {WalletConnectButton} from '@site/src/components/WalletConnect'

# Connect to Westend

- Install an Ethereum wallet of your choice, such as [Talisman] or [MetaMask] browser extension.
- Create a new Ethereum account (if you don’t already have one).

:::note

MetaMask enforces Ethereum contract size limits. If you want to deploy larger contracts, choose Talisman instead. Calling contracts is unaffected by this size limit.

:::

# Connect to Westend (Applicable to MetaMask only)

Reload the page and connect your MetaMask wallet to Westend using the following link:

<WalletConnectButton />
<br />

<details>
<summary>Or add it manually</summary>
- Network name: Westend
- RPC URL URL: `https://westend-asset-hub-eth-rpc.polkadot.io`
- Chain ID: `420420421`
- Currency Symbol: `WND`
- Block Explorer URL: `https://blockscout-asset-hub.parity-chains-scw.parity.io`

For MetaMask see this guide for [manually adding a custom network][add-network] using the settings provided above.

</details>

# Request some Test WND Tokens

You will need some test tokens to interact with the testnet.
You can request Westend tokens from the [Westend Faucet](https://faucet.polkadot.io/westend).
Simply enter your Ethereum address and click **Send** to request Westend tokens.

[add-network]: https://support.metamask.io/networks-and-sidechains/managing-networks/how-to-add-a-custom-network-rpc/#adding-a-network-manually
[MetaMask]: https://support.metamask.io/getting-started/getting-started-with-metamask/#how-to-install-metamask
[Talisman]: https://talisman.xyz/download
