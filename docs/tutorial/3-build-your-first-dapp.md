---
sidebar_position: 3
slug: /build-your-first-dapp
---

# Build Your First Dapp

## Prerequisites

Before you begin, ensure you have the following:

- **Node.js**: Install Node.js either via the [official website](https://nodejs.org/en/download) or by installing [nvm](https://github.com/nvm-sh/nvm) (a Node.js version manager). You may then use nvm to install Node.js by running `nvm install --lts`.

## Build Your Dapp

To get started with building a Decentralized Application (Dapp), spin up a repository using [`create-polkadot-dapp`](https://github.com/paritytech/create-polkadot-dapp):
```
npx create-polkadot-dapp@latest
```
When prompted, select the **react-solidity-remix** template. It contains a monorepo of a smart contract repository, together with a React front-end application to interact with it using the `ethers` library.

Follow the [README](https://github.com/paritytech/create-polkadot-dapp/blob/master/templates/react-solidity-remix/README.md) for instructions.
