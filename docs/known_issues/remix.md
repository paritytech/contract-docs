# REMIX

The known issues in our REMIX frontend.

## Release

REMIX `0.54-dev`

## Known issues

- Initialization Failures: Occasionally, REMIX may fail to load due to backend overload errors. If this occurs, please reload the REMIX IDE to restore functionality.

- Currency Updates: The display of currency (Wei/Ether) does not dynamically update based on the selected network.

- Loading Problems: REMIX may hang during loading, particularly on Windows 10 when using the Chrome browser. We are investigating this issue. If you encounter this, please try restarting your browser and loading REMIX again.

- Debugger Plugin: The debugger plugin is not functioning properly.

- Solidity Unit Testing: Solidity unit testing is not operational; only JavaScript-based unit testing is currently functional.

- Parallel Transactions: When sending transactions in REMIX, be patient, as REMIX may struggle to handle multiple parallel requests effectively. Please avoid initiating multiple transactions simultaneously to prevent errors.

- Deployment Issues: While the terminal may indicate a successful contract deployment, there are cases where the deployment has been reverted, and the contract does not exist on the blockchain. This discrepancy can lead to confusion, especially when the IDE shows a positive deployment status.

- UI Corruption: In some instances, users may experience UI corruption where elements do not render correctly. Reloading the REMIX IDE usually resolves these display issues.

## Not Tested

- Plugins Functionality: We have not yet conducted tests on the GitHub, DGIT DIFF, SOURCIFY, SWARM and IPFS plugins. Users should proceed with caution when using these features until further validation is completed.
