---
sidebar_position: 1
---

# Intro

This is the documentation that teaches you everything you need to know about smart contracts on
Polkadot AssetHub. The feature is work in progress. A preview version is deployed to the Westend AssetHub
in order to collect feedback during development.

Our solution is Ethereum compatible: You can write your contracts in Soldity and interact with the node
using Ethereum JSON RPC in combination with an Ethereum wallet like Metamask. Under the hood we re-compile the
contracts from YUL (EVM assembly) to RISC-V in order to run them using PolkaVM instead of EVM.

To keep things simple for now you need to use our [REMIX](https://remix.polkadot.io) web frontend to compile
your contracts to RISC-V and deploy them to Westend. Eventually, we will provide the tools to accomplish this process locally.

In order to develop an App that interacts with your contract you can a Ethereum javascript library of your choice. We
are using [`ethers.js`](https://ethers.org) in our tests which is the most popular library as of writing this.

## Contribute to this documentation

If you want to improve this documentation please open a pull request [here](https://github.com/paritytech/contract-docs).
