---
sidebar_position: 6
---

# Known Issues

The contract component is under heavy development. Here, we document the currently known issues
we are aware of. They can either be bugs or completely missing features. Those will be resolved.
Please consult [differences to Ethereum](../differences_to_eth) to learn about fundamental differences
within Ethereum that will likely not change in the future.

## Revive

The following compiler issues are known and we are working on it. Please do not open a new issue.

### Release

resolc `0.1.0-dev.13`

### Missing features

- [Libraries with public functions are not supported](https://github.com/paritytech/revive/issues/91)
- [Automatic import resolution is not supported](https://github.com/paritytech/revive/issues/98)
- The emulated EVM linear contract memory is limited to 64kb in size. Will be fixed with support for metered dynamic memory.
- [EIP-4844 opcodes are not supported](https://github.com/paritytech/revive/issues/64)
- IPFS metadata hashes are not supported
- [Compiled contract artifacts can exceed the pallet static memory limit and fail to deploy](https://github.com/paritytech/revive/issues/96).

## REMIX

The known issues in our REMIX frontend.

### Release

REMIX `0.54-dev`

### Known issues

- Initialization Failures: Occasionally, REMIX may fail to load due to backend overload errors. If this occurs, please reload the REMIX IDE to restore functionality.

- Currency Updates: The display of currency (Wei/Ether) does not dynamically update based on the selected network.

- Loading Problems: REMIX may hang during loading, particularly on Windows 10 when using the Chrome browser. We are investigating this issue. If you encounter this, please try restarting your browser and loading REMIX again.

- Debugger Plugin: The debugger plugin is not functioning properly.

- Solidity Unit Testing: Solidity unit testing is not operational; only JavaScript-based unit testing is currently functional.

- Parallel Transactions: When sending transactions in REMIX, be patient, as REMIX may struggle to handle multiple parallel requests effectively. Please avoid initiating multiple transactions simultaneously to prevent errors.

- Deployment Issues: While the terminal may indicate a successful contract deployment, there are cases where the deployment has been reverted, and the contract does not exist on the blockchain. This discrepancy can lead to confusion, especially when the IDE shows a positive deployment status.

- UI Corruption: In some instances, users may experience UI corruption where elements do not render correctly. Reloading the REMIX IDE usually resolves these display issues.

- Missing Injected Westend - MetaMask Environment: If the required environment is not present, reloading the REMIX IDE may resolve the issue.

- Unable to Select Required Environment: Clear your browser's browsing data and disconnect REMIX from MetaMask in the ALL Permissions menu of MetaMask.

- Transaction Fails or Resolve Stuck or Pending Transactions: Go to Settings -> Advanced in MetaMask and select [Clear activity tab data](https://support.metamask.io/managing-my-wallet/resetting-deleting-and-restoring/how-to-clear-your-account-activity-reset-account/#to-reset-the-account).

## JSON-RPC

### Missing features

- The list of supported methods is [here](https://github.com/paritytech/polkadot-sdk/blob/master/substrate/frame/revive/rpc/src/rpc_methods_gen.rs); notably, `eth_trace` endpoints are not supported yet.
- EVM transaction have a transaction hash that is different from the Substrate transaction hash, as a consequence, it does not work out of the box with Substrate block explorers, this is a known issue and will be fixed in the near future.

### Not Tested

- Plugins Functionality: We have not yet conducted tests on the GitHub, DGIT DIFF, SOURCIFY, SWARM and IPFS plugins. Users should proceed with caution when using these features until further validation is completed.
