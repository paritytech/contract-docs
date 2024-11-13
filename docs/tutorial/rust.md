---
sidebar_position: 6
---

# Writing and Calling a Rust Contract

One of the benefits of using PolkaVM vs EVM is that you can write contracts
in any language that compile down to RISC-V. In this chapter we learn how
to use Rust to write a contract and how to call it from Solidity.

## Use the Rust Template

[Here](https://github.com/paritytech/rust-contract-template) you can find our
Rust contract template. You can [make use](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template)
of githubs template feature in order to  make it the starting point of your own repository.

## Compile the template

Simply follow the README inside the template to learn how to compile the project into a
`contract.polkavm`. The repository also contains a example Solidity file that demonstrates
how to call this contract.

## Deploy the template

You can use ether.js to deploy the Rust contract. We [covered that](/getting-started-with-ethers.js#deploy-a-contract)
earlier in the tutorial. You skip the compilation step and pass the raw `contract.polkavm` as bytecode:

```ts
import { ContractFactory } from 'ethers'

/// We specify the abi manually since the Rust compiler won't generate one for us
const abi = ["constructor()", "function fibonacci(uint) view returns(uint)"];
const bytecode = readFileSync('contract.polkavm');

// Instantiate a contract factory.
const contractFactory = new ContractFactory(abi, bytecode, signer)

try {
  const contract = await contractFactory.deploy(/* args */)
  await contract.waitForDeployment()

  // Get the contract's address.
  const address = await contract.getAddress()
  console.log(`Contract deployed: ${address}`)
} catch (e) {
  console.error('Failed to deploy contract', e)
}

// Try calling the fibonacci function directly
// ...
```

## Deploy and Use the Caller Contract

You can now deploy the [Solidity contract](https://github.com/paritytech/rust-contract-template/blob/master/call_from_sol.sol)
from the template repository using ether.js or REMIX. It is setup to call the Rust contract via the
`fibonacciRust` function. You need to pass the address from the previous step.
