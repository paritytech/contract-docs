---
sidebar_position: 4
slug: /work-with-a-local-node
---

import {LocalNetworkButton} from '@site/src/components/NetworkButton';

# Work with a Local Node

This tutorial describes how to set up a local node and use it with REMIX. Running a local node allows you to observe the logs
it emits.

## Prerequisites

Before you begin, ensure you have the following:

- **MetaMask**: Install the MetaMask browser extension. This will allow you to interact with your local node.

## Install Dependencies

Follow the instructions on [Installing Dependencies](https://wiki.polkadot.network/docs/build-guides-install-deps) from the Polkadot wiki up to the "Verifying Installation" section.

## Clone the Polkadot SDK Repository

Open your terminal and run the following commands to clone the Polkadot SDK repository:

```bash
git clone https://github.com/paritytech/polkadot-sdk
cd polkadot-sdk
```

## Build and Run the Kitchensink Node

To build and run the Kitchensink node, use the following command inside the just-cloned repo:

```bash
RUST_LOG="error,evm=debug,sc_rpc_server=info,runtime::revive=debug" cargo run --release --bin substrate-node -- --dev
```

### A Word On Logging

Above, we set `RUST_LOG` in order to increase the log level of our contract related components. We also reduce the log level for all other components
to `error` to reduce the amount of unrelated information. The variable is evaluated when we run the node. Not at compile time.

For more detailed logging you can increase the log level to `runtime::revive=trace`. This will log every host function call the contract performs. To show logs
from PolkaVM add `polkavm=debug` or even `polkavm=trace`.

## Build and Run Eth RPC Proxy

This RPC proxy translates Ethereum-compatible requests into Substrate-compatible requests.

It acts as a bridge between Ethereum tools, like MetaMask and Remix, and the Substrate-based network, enabling Ethereum applications to interact seamlessly with Substrate-based chains by interpreting Ethereum RPC calls and routing them to the appropriate Substrate functions. This way, developers can work with familiar Ethereum-based tools.

Open another terminal window and run the Eth RPC proxy from the same directory:

```bash
RUST_LOG="info,eth-rpc=debug" cargo run --release -p pallet-revive-eth-rpc -- --dev
```

## Metamask Configuration

1. Import the following private key into [MetaMask](https://support.metamask.io/managing-my-wallet/accounts-and-addresses/how-to-import-an-account/#importing-using-a-private-key) to access your pre-funded local account: `5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133`

2. Connect your MetaMask wallet to a local server using the following link:

<LocalNetworkButton />

<details>
<summary>Or add it manually</summary>
- Network name: Kitchensink local
- RPC URL URL: `http://localhost:8545`
- Chain ID: `420420420`
- Currency Symbol: `DEV`
</details>
3. Make sure that the **Kitchensink Local Testnet** network is selected

## REMIX Setup

1. Open the REMIX IDE.
2. From the **Environment** dropdown, select the enabled **Injected Provider - MetaMask**.
3. Select the pre-founded local account

To compile and deploy your smart contract, refer to the [Deploying Your First Contract](./2-deploy-your-first-contract.md) tutorial, keeping the environment settings configured in this section.

Note: When you restart the Kitchensink node, you will need to reset the nonce in MetaMask. To do this, go to **Settings -> Advanced** in MetaMask and select [**Clear activity tab data**](https://support.metamask.io/managing-my-wallet/resetting-deleting-and-restoring/how-to-clear-your-account-activity-reset-account/#to-reset-the-account).
