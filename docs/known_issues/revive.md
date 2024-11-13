# Revive

The following compiler issues are known and we are working on it. Please do not open a new issue.

## Release

resolc `0.1.0-dev.5`

## Missing features

- [Libraries with public functions are not supported](https://github.com/paritytech/revive/issues/91)
- [Automatic import resolution is not supported](https://github.com/paritytech/revive/issues/98)
- The emulated EVM linear contract memory is limited to 64kb in size. Will be fixed with support for metered dynamic memory.
- [The contract calldata is currently limited to 1kb in size](https://github.com/paritytech/revive/issues/57)
- [EIP-4844 opcodes are not supported](https://github.com/paritytech/revive/issues/64)
- [Delegate calls are not supported](https://github.com/paritytech/revive/issues/67)
- [The `blockhash` opcode is not supported](https://github.com/paritytech/revive/issues/61)
- [Gas limits for contract calls are ignored](https://github.com/paritytech/revive/issues/60)
- [Gas related opcodes are not supported](https://github.com/paritytech/revive/issues/60)
- IPFS metadata hashes are not supported
- [Compiled contract artifacts can exceed the pallet static memory limit and fail to deploy](https://github.com/paritytech/revive/issues/96).
- [Transfers to inexistent accounts will fail if the transferred value lies below the ED.](https://github.com/paritytech/revive/issues/83) Will be fixed in the pallet to make the ED completely transparent for contracts.
- [Source level debug information and contract execution tracing](https://github.com/paritytech/revive/issues/18)
- [Compiling contracts requiring `solc` version earlier than `0.8.0` requires using the EVM legacy assembly pipeline. This is in a highly experimental state.](https://github.com/paritytech/revive/issues/89)

## Wontfix

Please consult [differences to Ethereum](../differences_to_eth) to learn about fundamental differences within Ethereum that will likely not change in the future.
