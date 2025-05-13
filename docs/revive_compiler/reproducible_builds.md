---
sidebar_position: 5
---

# Reproducible contract builds

Reproducible contract builds across all supported platforms is a goal of the compiler. We implement the following precautionary measures aiding reproducible builds:
- Avoid datastructures with (random) state when iteration is required.
- Including all bytecode altering compiler options as custom extensions in the standard JSON input.
- Providing statically linked resolc linux binaries.
- Continuous testing for reproducible builds using a large corpus.
- Exposing all bytecode altering compiler configuration in the standard JSON input. 

Any case where not possible to reproduce the build accross any support platform are treated as a bug. If you believe to have uncovered a case violating reproducibility of contract builds please do not hesitate to [open an issue](https://github.com/paritytech/revive/issues/new) providing an exact reproducer.


## Requirements

In order to reproduce and thus verify the byte code of an on-chain contract by matching its code hash, the following information is needed:
- The Solidity sources **including all dependencies**.
- The `resolc` version used during the build process.
- The `solc` version used during the build process.
- Any byte code altering compiler options (see below) __or__ the standard JSON input that was supplied to `resolc`.

## Byte code altering compiler options

The following resolc CLI options influence the byte code of compiled contracts:
- `-g`
- `-O`
- `--heap-size`
- `--stack-size`
- `--llvm-arg`
- `--disable-solc-optimizer`
- `--fallback-Oz`

