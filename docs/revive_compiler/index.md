---
sidebar_position: 5
---

# Revive compiler

Welcome to the revive Solidity compiler documentation! This section is aimed at Solidity dApp developers and covers the following topics:
- Installation and usage instructions
- An archtiecture overview
- Differences in translation with respect to the reference Ethereum Solidity implementation

# FAQ

## What EVM version do you support?

We neither do or do not support any EVM version. We support Solidity versions, starting from `solc` version 0.8.0 onwards.

## Do you support opcode `XY`?

See above, the same applies.

## In what Solidity version should I write my dApp?

We generally recommend to always use the latest supported version to profit from latest bugfixes, features and performance improvements.

Find out about the latest supported version by running `resolc --supported-solc-versions` or checking [here](https://github.com/paritytech/resolc-bin).

## Tool `XY` says the contract size is larger than 24kb and will fail to deploy?

The 24kb code size restriction only exist for the EVM. Our limit is currently around 100kb and will increase in the future.
