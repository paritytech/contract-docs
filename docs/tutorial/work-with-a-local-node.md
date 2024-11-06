---
sidebar_position: 4
slug: /work-with-a-local-node
---

import {LocalNetworkButton} from '@site/src/components/NetworkButton';

# Work with a Local Node

This tutorial describes how to set up a local node and use it with REMIX.

## Prerequisites

Before you begin, ensure you have the following:

- **MetaMask**: Install the MetaMask browser extension. This will allow you to interact with your local blockchain.

## Install Dependencies

Follow the instructions on [Installing Dependencies](https://wiki.polkadot.network/docs/build-guides-install-deps) from the Polkadot wiki up to the "Verifying Installation" section.

## Clone the Polkadot SDK Repository

Open your terminal and run the following commands to clone the Polkadot SDK repository:

```bash
git clone https://github.com/paritytech/polkadot-sdk
```

## Build and Run the Kitchensink Node

To build and run the Kitchensink node, use the following command:

```bash
cd polkadot-sdk
RUST_LOG="error,evm=debug,sc_rpc_server=info,runtime::revive=debug" cargo run --bin substrate-node -- --dev
```

## Build and Run Eth RPC Node

This RPC node translates Ethereum-compatible requests into Substrate-compatible requests.

It acts as a bridge between Ethereum tools, like MetaMask and Remix, and the Substrate based network, enabling Ethereum applications to interact seamlessly with Substrate based chains by interpreting Ethereum RPC calls and routing them to the appropriate Substrate functions. This way, developers can work with familiar Ethereum-based tools.

Open another terminal window and navigate to the Eth RPC directory to start the Eth RPC node:

```bash
cd polkadot-sdk/substrate/frame/revive/rpc
RUST_LOG="info,eth-rpc=debug" cargo run --bin eth-rpc -- --dev
```

## Metemask Configuration

1. Import the following private key into [MetaMask](https://support.metamask.io/managing-my-wallet/accounts-and-addresses/how-to-import-an-account/#importing-using-a-private-key) to access your pre-funded local account: `5fb92d6e98884f76de468fa3f6278f8807c48bebc13595d45af5bdc4da702133`

2. Connect your Metamask wallet to a local server using the following link:

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
2. Navigate to the **Deploy & Run** tab. In the **Environment** dropdown, select **Customize this list...**.
3. Enable **INJECTED PROVIDER - METAMASK** in the **Deploy using a Browser Extension** section.
4. From the **Environment** dropdown, select the enabled **Injected Provider - MetaMask**.
5. Select the pre-founded local account

To compile and deploy your smart contract, refer to the [Deploying Your First Contract](./2-deploy-your-first-contract.md) tutorial, keeping the environment settings configured in this section.
