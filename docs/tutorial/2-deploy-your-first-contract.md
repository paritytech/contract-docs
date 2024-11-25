---
sidebar_position: 2
slug: /deploy-your-first-contract
---

import {WestendNetworkButton} from '@site/src/components/NetworkButton';

# Deploy Your First Contract

This guide will walk you through deploying and interacting with contracts in REMIX.

1. Load and Compile a Contract.

   Open the [REMIX IDE](https://remix.polkadot.io).
   By default, REMIX provides a sample workspace. Choose a Solidity contract to compile and click the **▶️** button.
   Alternatively, use the **Solidity Compiler** tab to compile the selected contract.

   ![Compile contract](img/dapp_compile.jpeg)

2. Deploy to Westend.

   Select **Westend Testnet - MetaMask** environment in the **Deploy & Run** tab.
   When prompted, allow REMIX to connect to MetaMask. Your account address and balance will be displayed under the **ACCOUNT** section.

   ![Deploy contract](img/dapp_deploy.jpeg)

   Click **Deploy** and **Confirm** the transaction in MetaMask.

   ![Confirm transaction](img/dapp_metamask_deploy.jpeg)

   Wait for the deployment to complete, as indicated in the terminal panel.

   ![Terminal panel](img/dapp_terminal.png)

## Interact with Your Deployed Contract

1. Interact with Deployed Contracts.

   Once deployed, your contract will appear in the **Deployed/Unpinned Contracts** section of the **Deploy & Run** tab.
   To keep your contract visible after reloading Remix, pin it to the workspace. Pinning a contract moves it to the Pinned Contracts section, ensuring it won't disappear upon reload. When pinned, Remix will save both the contract’s address and its ABI for easy access.

   ![Pin contract](img/pin.png)

   You can interact with your contract by calling its methods from this section, with all transactions routed through MetaMask.

   ![Call contract](img/dapp_call.jpeg)

2. Run Tests.

   Currently, REMIX supports JavaScript tests only.
   To run tests, navigate to the **File Explorer** and select any JavaScript test file in the **tests** directory.

   ![Test contract](img/dapp_test.jpeg)

   Run it by clicking the **▶️** button.

## Generate and Deploy DApp UI with Quick DApp Plugin

The Quick DApp plugin in REMIX simplifies the process of creating and deploying decentralized applications (DApps). This tool automates the generation of a user interface (UI) for your smart contracts and facilitates quick deployment to the Surge platform.

1. Activate the Plugin

   Open REMIX IDE and navigate to the **Plugin Manager** tab. Search for **Quick DApp** and click **Activate**.

2. Select Your Contract

   Choose the smart contract you want to deploy from the **Deploy & Run** tab. The plugin will automatically identify your contract and generate a corresponding UI.

3. Configure the UI

   You can customize the UI components based on the functions of your smart contract. The plugin allows you to specify which functions to expose to the user interface.

4. Setup Surge

   ```bash
   # install surge
   npm install --global surge

   # create login
   surge login
   ```

5. Deploy to Surge

   Once your UI is configured, click the **Deploy** button. The plugin will handle the deployment process to Surge, providing you with a public URL to access your DApp.

## Connect to Your Local Filesystem (Optional)

If you prefer working with contracts on your local filesystem, Remix can connect directly to it. Keep in mind that connecting to your local filesystem will switch your current workspace. If you want to keep working on contracts from your current workspace, make sure to download them first.

![Download workspace](img/download.png)

Note that switching to a local filesystem will cause all previously deployed contracts, both pinned and unpinned, to become invisible in the **Deploy & Run** tab. If you need to interact with already deployed contracts, make sure to note down their addresses beforehand so you can load them later using the **At Address** button.

![Load contract](img/load_contract.png)

To enable seamless integration between Remix IDE and your local development environment use the remixd tool. This allows you to easily manage and edit your smart contract files directly from Remix IDE. Follow these steps to establish the connection.

1. Install Node

   As a prerequisite install Node, e.g., using [Volta](https://volta.sh/) (which will also install `npm`):

   ```bash
   # install Volta
   curl https://get.volta.sh | bash

   # install Node
   volta install node
   ```

2. Install REMIXD

   Install the REMIXD tool globally on your machine by running the following command in your terminal:

   ```bash
   npm install -g @remix-project/remixd
   ```

3. Run REMIXD

   After installation, launch the REMIXD server by specifying the directory you want to share and the REMIX IDE URL. Replace `<YOUR_DIRECTORY>` with the path to your local project folder:

   ```bash
   remixd -s <YOUR_DIRECTORY> -u https://remix.polkadot.io
   ```

4. Activate REMIXD plugin in REMIX

   Go to the **Plugin Manager** tab. Find **REMIXD**, click **Activate**, and then select **Connect** to link your local directory with the IDE.

   ![Enable REMIXD](img/dapp_remixd.jpeg)