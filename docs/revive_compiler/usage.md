---
sidebar_position: 2
---

# Usage
The compiler can be used via the `resolc` CLI interface or supported tooling.

## CLI

The usage of `resolc` is kept similar to the Ethereum Solidity `solc` compiler. Standard and combined JSON input is supported. We aim to keep it as close to a drop-in replacement to `solc` as possible. However, due to fundamental differences of our contracts stack, there are a few things and options worthwhile to know about in `resolc` which do not exist in Ethereum.

:::tip

For a detailed reference about the CLI, please see `resolc --help`.

:::

### LLVM optimization levels
```
  -O, --optimization <OPTIMIZATION>
```

`resolc` exposes the optimization level setting for the LLVM backend. The performance and size of compiled contracts varies wiedly between different optimization levels.

Valid levels are the following:
- `0`: No optimizations are applied
- `1`: Basic optimizations for execution time.
- `2`: Advanced optimizations for execution time.
- `3`: Aggressive optimizations for execution time.
- `s`: Optimize for code size.
- `z`: Aggressively optimize for code size.

By default, `-O3` is applied.

### Stack size
```
      --stack-size <STACK_SIZE>
```

PVM is a register machine with a traditional stack memory space for local variables. This controls the total amount of stack space the contract can use.
          
You are incentiviced to keep this value as small as possible:
1. Increasing the heap size will increase startup costs.
2. The stack size contributes to the total memory size a contract can use, which includes the contracts code size

Default value: 32768
          
:::warning 

If the contract uses more stack memory than configured, it will compile fine but eventually revert execution at runtime!

:::

### Heap size
```
     --heap-size <HEAP_SIZE>
```

Unlike the EVM, due to the lack of dynamic memory metering, PVM contracts emulate the EVM heap memory with a static buffer. Consequentially, instead of infinite memory with exponentially growing gas costs, PVM contracts have a finite amount of memory with constant gas costs available.

You are incentiviced to keep this value as small as possible:
1.Increasing the heap size will increase startup costs.
2.The heap size contributes to the total memory size a contract can use, which includes the contracts code size

Default value: 65536
          
:::warning

If the contract uses more heap memory than configured, it will compile fine but eventually revert execution at runtime!

:::

### solc
```
      --solc <SOLC>
```

Specify the path to the `solc` executable. By default, the one in `${PATH}` is used.

### Debug artifacts
```
      --debug-output-dir <DEBUG_OUTPUT_DIRECTORY>
```

Dump all intermediary compiler artifacts to files in the specified directory. This includes the YUL IR, optimized and unoptimized LLVM IR, the ELF shared object and the PVM assembly. Useful for debugging and development purposes.

### Debug info
```
  -g
```
Generate source based debug information in the output code file. Useful for debugging and development purposes and disabled by default.

## Tooling
We provide customized distributions of [hardhat](https://github.com/paritytech/hardhat-polkadot) and [foundry](https://github.com/paritytech/foundry-polkadot) supporting contract compilation via `resolc`. Please refer to their respective docomuntation to learn more.
