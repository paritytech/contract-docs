---
sidebar_position: 3
---

# Architecture

Our smart contract solution contains the following components.

## [pallet_revive](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive)

This is the blockchain module which executes smart contracts. It adds a bunch of extrinsics and runtime APIs just as any
other pallet. However, it also [adds logic](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive/src/evm)
that allows the blockchain to process Ethereum-style transactions. Those special transactions are not submitted directly to the chain.
Even though that would be theoretically possible.

Instead, users (wallets, Dapps, ...) connect to a [proxy server](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/revive/rpc)
deployed alongside the blockchain node. This proxy emulates the Ethereum Json RPC, meaning it exposes the Ethereum JSON RPC interface
as a server and connects to the node as a network client. It repackages the Ethereum transactions into a
[special dispatchable](https://github.com/paritytech/polkadot-sdk/blob/2700dbf2dda8b7f593447c939e1a26dacdb8ce45/substrate/frame/revive/src/lib.rs#L759-L784)
while leaving the payload untouched. It is up to the logic mentioned above to decode the Ethereum transaction and transform it into
something that `pallet-revive` can understand. By submitting the Ethereum transaction's payload verbatim to the block we make it easy to adapt
tooling (e.g. block explorers) which don't need to deal with a different transaction format.

The choice of using a standalone proxy is intentional: Adding new endpoints to the node binary would require alternative clients to implement them
as well. This is why we chose this approach that requires zero changes to the client.

## [PolkaVM](https://github.com/paritytech/polkavm)

This is the most obvious change we made versus competing technologies. Instead of using an EVM to execute contracts we use a new custom virtual machine.
Currently, we include a PolkaVM interpreter within the runtime itself. A later update will deliver a full PolkaVM JIT running inside the client. Please
note that we will still keep the interpreter available so that we can use the most appropriate backend for each workload. For example, for contract invocations
that just execute very little code the interpreter will still be faster as it can start executing code right away (lazy interpretation).

The two fundamental differences to the EVM are:

### Register Machine

EVM is a stack machine. This means that arguments to functions are passed on an infinite stack. PolkaVM is based on RISC-V which is a register machine. This means
it passes arguments in a finite set of registers. The main benefit of this is that it makes the translation step to the underlying hardware much more
efficient as those are all register machines. We chose the number of registers carefully so that they are smaller than in the infamously register-starved
x86-64 instruction set. Allowing us to reduce the NP-hard register allocation problem to a simple 1to1 mapping is the secret ingredient to PolkaVM's
fast compilation times.

### Reduced Word Size

EVM uses a word size of 256bit. Which means that **every** arithmetic operation has to be performed on those big numbers. This makes any meaningful
number crunching really slow as it has to be translated to a lot of native instructions. PolkaVM uses a word size of 64bit which is natively supported
by the underlying hardware. That said, when translating Solidity contracts via YUL (#Revive) we will still end up with 256bit arithmetic as YUL is too low-level
to automatically convert the integer types. However, it is perfectly possible to write contracts in a different language and call that seamlessly
from Solidity. We imagine a system where business logic is written in Solidity but the underlying architecture in faster languages, akin to Python where
most of the heavy lifting is done by C modules.

## [Revive](https://github.com/paritytech/revive)

In order to run Solidity on PolkaVM we need to compile it to RISC-V. For that we need a compiler. It works by using the original `solc` compiler
and then recompiling its intermediate representation (YUL) output to RISC-V. This has the benefit of being a much smaller task than implementing
a full Solidity compiler. We support all quirks and oddities of Solidity and all its different versions by choosing this approach.

## Remix

We maintain a fork of REMIX. The main change compared to the original version is that we needed to change the compiler so we changed REMIX to
use a backend for compilation instead of an in-browser compiler. This was necessary as our LLVM-based revive is too heavyweight for the browser.

- [REMIX fork](https://github.com/paritytech/revive-remix)
- [Compiler backend](https://github.com/paritytech/revive-remix-backend)
- [Hosted version](https://remix.polkadot.io)

Eventually, we want to get rid of the backend and provide an in-browser compiler.
