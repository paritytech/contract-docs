---
sidebar_position: 5
---

# Things to try out

If you mastered the tutorial here are a few things we think you could try and let us know how it went.

## Download contract code from REMIX

When using REMIX you won't even notice that under the hood we are using PolkaVM instead of EVM. Apart from the currently
missing functionality of course.

If you are interested in peeking into the PolkaVM code you can download the compiled code from REMIX and disassemble it.

1. Install our PolkaVM [command line tool](https://github.com/paritytech/polkavm/tree/master/tools/polkatool). We will use that later to inspect the code.
	```
	cargo install polkatool
	```
2. Compile any contract using REMIX as learned in previous chapters of this tutorial.
3. Switch to the "Compiler" tab and copy the bytecode:
	![Download bytecode](img/download_bytecode.png)
4. Paste the code as is into a text file and save it as `code.txt`.
5. Convert the text into binary using `xxd`. Should be pre-installed almost everywhere:
	```
	xxd -r -p < code.txt > code.polkavm
	```
6. Now you have a valid PolkaVM module you can poke at with `polkatool`:
	```
	$ polkatool disassemble code.polkavm

	// RO data = 0/0 bytes
	// RW data = 0/66608 bytes
	// Stack size = 16384 bytes

	// Instructions = 933
	// Code size = 3031 bytes

	  : @0
	  0: a2 = a0
	  2: a3 = a0 >> 16
	  5: a0 = 0x0
	  7: jump @7 if a3 != 0
	  : @1
	10: a3 = 0x10000
	15: jump @7 if a3 <u a1
	  : @2
	18: a1 = a2 + a1
	21: a0 = a1 + 0x1f
	24: a0 = a0 & 0xffffffe0
	27: jump @4 if a0 <=u 65536
	  : @3
	33: a0 = 0x0
	...
	99: ecalli 4 // 'set_storage'
	...
	```

## RISC-V vs PolkaVM

Consult this [cheat sheet](https://projectf.io/posts/riscv-cheat-sheet/) to understand what is going on here.
A few interesting things to `grep` for that are unique to PolkaVM:

*  The `ecalli` instructions is used to call into pallet_revive. The list of functions available to contracts can be found
[here](https://docs.rs/pallet-revive/latest/pallet_revive/trait.SyscallDoc.html). This is a custom instruction that doesn't exist in RISC-V. We replaced the
standard `ecall` instruction with it. The only difference is that `ecalli` takes an immediate value as part of the instruction while `ecall` has no arguments.
We use this value to pass the syscall number. This allows us to statically see which functions a contract is calling. Otherwise you wouldn't be able to tell
from the disassebmly that line 99 is calling `set_storage`.
* Look for the labels `[export #0: 'call']` and `[export #1: 'deploy']`. Those are the only entry points of a contract. The numbering doesn't matter, though. They
are referenced by name. `call` is the entry point that is used when an existing contract is executed. `deploy` is the constructor and called on deployment. In contrast to
Ethereum we keep the constructors on-chain. This is why we have two entry points instead of one.

## Decode Ethereum transactions

It might be interesting to look at the transactions submitted to Westend. When Ethereum transactions are submitted through
the Ethereum RPC proxy they are submitted on-chain as a special `eth_transact` usigned extrinsic. So far we only used the Ethereum
RPC so all transactions we submitted as part of this tutorial will of this type. You can filter for all `pallet_revive` extrincs
on Subscan. But make sure to set the filter to show "All" extrinsics. The default is to only show signed extrinsics which would
filter out `eth_transact`. [Here](https://assethub-westend.subscan.io/extrinsic?page=1&time_dimension=date&signed=all&module=revive)
is a direct link with the correct filter already set.

This is how the contents of such an extrinsic look like:
![Subscan](img/subscan.png)

You will notice that it doesn't contain the sender of the transaction. This is because this extrinsic is unsigned. It
doesn't contain a signature. At least not around its fields: The `payload` is the raw Ethereum transaction which is indeed
signed. The sender of the extrinsic is determined by recovering the public key from that transaction. You can simply put the
`payload` into any tool that can decode Ethereum transactions to see the sender and other details.
[This website](https://tools.deth.net/tx-decoder) for example:
![Decode](img/decode.png)

### Decode the Contract Code

You will notice that the `to` field is missing in this example. This indicates that this will instantiate a new contract rather than calling
an existing one. This also explains why the `data` field is so large: It contains the contract code. The format is the same as on Ethereum:
`code ++ constructor_args` where `++` is concatenation. The only difference is that `code` is a PolkaVM module and not EVM bytecode. You can use
`xxd` and `polkatool` as we learned in TODO to peek into the code. Just keep in mind that you need to remove the trailing `constructor_args` if
there are any. Not all constructors take arguments, though. It depends on the contract.

You will know you need to to this if you get this error:
```
ERROR: failed to parse "data.polkavm": failed to parse program blob: blob size doesn't match the blob length metadata
```

But how do you know where the program blobs ends and the constructor arguments start? The PolkaVM module header contains a field that tells
you the length of the module. It is a little endian u64 at a fixed offset: `5` (just after the magic "PVM\0"). If `data` contains more than what
is specified in this field it means that the extra bytes are the constructor arguments. Maybe you can try adding some functionality
to [`polkatool`](https://github.com/paritytech/polkavm/tree/master/tools/polkatool) to deal with trailing data.


## Call a contract via Polkadot.js Apps
