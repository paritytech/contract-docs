---
sidebar_position: 2
slug: /getting-started-with-ethers.js
---

# Getting started with ethers.js

This guide will teach you how to use ethers.js with Metamask to interact with your contract.
For more information, consult the [ethers.js documentation](https://docs.ethers.org), as well as the [Metamask documentation](https://docs.metamask.io/wallet/reference/provider-api/).

## Getting a provider

A provider connects your application to the blockchain, enabling queries, transactions, and event listening. In the browser, it can be accessed via wallets like MetaMask that inject the ethereum object into the window. On the server side, providers like `JsonRpcProvider` are used to connect directly to RPC nodes.

### Browser

#### Verify that MetaMask is installed

Ensure that MetaMask is installed and [connected to Asset Hub](../connect-to-asset-hub).
Then you can use the following code to connect to your browser wallet (such as Metamask).

```ts
import { BrowserProvider } from 'ethers'

// Browser wallet will inject the ethereum object into the window object
if (typeof window.ethereum == 'undefined') {
  return console.log('No wallet installed')
}

console.log('An Ethereum wallet is installed!')
const provider = new BrowserProvider(window.ethereum)
```

### Server-side (Node.js, Deno, Bun)

On the server side, you can use the `JsonRpcProvider` to connect to a RPC node.

```ts
import { JsonRpcProvider } from 'ethers'

const provider = new JsonRpcProvider(
  'https://westend-asset-hub-eth-rpc.polkadot.io'
)
```

## Fetch information about the network

Once you have a provider, you can fetch information about the network.

```ts
const network = await provider.getNetwork()
const blockNumber = await provider.getBlockNumber()
console.log(`Network: ${JSON.stringify(network)}`)
console.log(`Block number: ${blockNumber}`)
```

## Connect a wallet.

### Browser

Once you have a provider, you can call `getSigner` to connect a wallet, and fetch information about the connected accounts.
`getSigner` will prompt the user to connect their wallet to the dapp the first time.

```ts
let signer: JsonRpcSigner
try {
  signer = await provider.getSigner() // Get the main account
  // signer = await provider.getSigner(1) // Get the 2nd account
  // signer = await provider.getSigner("0x..") // Get the account with the specified address

  // get the signer's address
  console.log(`Signer: ${signer.address}`)

  // get the signer's nonce
  const nonce = await signer.getNonce()
  console.log(`Nonce: ${nonce}`)
} catch (e) {
  console.error('Failed to get signer', e)
}
```

To revokes previously granted permissions, call:
See [MetaMask's documentation](https://docs.metamask.io/wallet/reference/json-rpc-methods/wallet_revokepermissions) for more information.

```ts
await ethereum.request({
  method: 'wallet_revokePermissions',
  params: [
    {
      eth_accounts: {},
    },
  ],
})
```

To grant access to more accounts, use the following method:
See [MetaMask's documentation](https://docs.metamask.io/wallet/reference/json-rpc-methods/wallet_requestPermissions) for more information.

```ts
await ethereum.request({
  method: 'wallet_requestPermissions',
  params: [{ eth_accounts: {} }],
})
```

### Server-side

On the server side, you can use a `Wallet` to sign transactions.

```ts
import { Wallet } from 'ethers'

const signer = new Wallet(privateKey, provider)
```

### Transfer some balance

```ts
try {
  import { parseEther } from 'ethers'

  const tx = await signer.sendTransaction({
    to: '0x...',
    value: parseEther('1.0'),
  })

  const receipt = await tx.wait()
  console.log(`Transaction hash: ${receipt?.hash}`)
} catch (e) {
  console.error('Failed to send transaction', e)
}
```

### Deploy a contract

Using Node.js, Deno, or Bun, you can compile your contract to Polkavm bytecode using the `@parity/revive` package.
Once compiled, you can deploy your contract, as shown below.

```ts
import { compile } from '@parity/revive'

// Compile the solidity contract to Polkavm bytecode.
const contract = './path/MyContract.sol'
const contractName = 'MyContract'
const res = await compile({
  [contract]: {
    content: readFileSync(contract, 'utf8'),
  },
})

// Get the contract's abi and bytecode.
const {
  abi,
  evm: {
    bytecode: { object: bytecode },
  },
} = res.contracts[contract][contractName]

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
```

### Call a deployed contract

Once you have deployed a contract, you can call its methods.

```ts
import { TransactionResponse } from 'ethers'
try {
  const contract = new Contract(address, abi, signer)
  const tx = (await contract.myMethod()) as TransactionResponse
  console.log('Call transaction hash:', tx.hash)
  tx.wait()
} catch (e) {
  console.error('Failed to call contract', e)
}
```
