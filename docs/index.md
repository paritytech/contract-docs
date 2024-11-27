---
sidebar_position: 1
---

# Intro

This documentation teaches you everything you need to know about smart contracts on
Polkadot Asset Hub. The feature is a work in progress. A preview version is deployed to the Westend Asset Hub
to gather feedback during development.

Our solution is Ethereum-compatible: You can write your contracts in Solidity and interact with the node
using Ethereum JSON RPC alongside an Ethereum wallet like MetaMask. Under the hood, we recompile the
contracts from YUL (EVM assembly) to RISC-V to run them using [PolkaVM](https://wiki.polkadot.network/docs/learn-jam-chain#polkadot-virtual-machine-pvm) instead of EVM.

To keep things simple for now, you need to use our [REMIX](https://remix.polkadot.io) web frontend to compile
your contracts to RISC-V and deploy them to Westend. Eventually, we will provide tools to accomplish this process locally.

To develop an app that interacts with your contract, you can use any Ethereum JavaScript library of your choice. We
are using [`ethers.js`](https://ethers.org) in our tests, which is the most popular library as of this writing.

## Get in Touch

If you’d like to talk to us, please join [our Discord](https://discord.gg/bKza3GEBEA) and say hello.
This is also where we handle support questions. If you found a bug, please [report it](https://github.com/paritytech/contract-issues),
but make sure to check the [known issues](/known_issues) first.

## Contribute to this documentation

If you want to improve this documentation, please open a pull request [here](https://github.com/paritytech/contract-docs).
