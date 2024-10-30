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

## Not Tested

- Plugins Functionality: We have not yet conducted tests on the GitHub, IPFS, and Remixd plugins. Users should proceed with caution when using these features until further validation is completed.
