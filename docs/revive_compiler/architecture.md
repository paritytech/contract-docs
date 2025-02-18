---
sidebar_position: 3
---

# Architecture

This section provides a brief overview of how the revive compiler works.

## Compilation process

The following happens under the hood when compiling a Solidity file with revive:
1. `solc` is used to lower the Solidity source code into YUL intermediate representation.
2. `revive` lowers the YUL IR into LLVM IR.
3. LLVM optimizes the code and emits a RISC-V ELF shared object (through LLD).
4. The PolkaVM linker finally links the ELF shared object into a PolkaVM blob.

This compilation process can be visualized as follows:

![Architecture Overview](img/revive-compiler.svg)

## `revive` vs `resolc` nomenclature

`revive` is the name of the compiler projects, which contains multiple components (for example the YUL frontend but also the `resolc` executable itself).

`resolc` is the name of the single entry-point frontend binary executable, which transparently uses all revive components to produce compiled contract artifacts.