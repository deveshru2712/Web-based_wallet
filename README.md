# Web-based Wallet

This project provides a web-based wallet solution demonstrating key generation, signing, and verification functionalities using Solana and related technologies. It includes both Node.js scripts for backend key management and a React frontend for a user interface.

## Features and Functionality

This web-based wallet provides the following features:

*   **Keypair Generation:** Generates Solana keypairs (public and private keys) using `@solana/web3.js`.
*   **Mnemonic Phrase Generation:**  Generates mnemonic phrases using `bip39` for wallet recovery.
*   **Key Derivation:** Derives multiple keypairs from a single mnemonic using hierarchical deterministic (HD) key derivation (`ed25519-hd-key`).
*   **Message Signing:** Signs messages using the generated private keys.
*   **Signature Verification:** Verifies signatures to ensure message authenticity and integrity.
*   **React Frontend:** Provides a user interface (UI) for generating mnemonics and derived Solana wallets.

## Technology Stack

*   **JavaScript:** Primary programming language.
*   **Node.js:**  Runtime environment for backend scripts.
*   **React:**  JavaScript library for building the user interface.
*   **@solana/web3.js:** Solana JavaScript SDK for interacting with the Solana blockchain.
*   **tweetnacl:**  A portable version of NaCl cryptographic library.
*   **bip39:** Library for generating and managing mnemonic phrases.
*   **ed25519-hd-key:** Library for hierarchical deterministic key derivation using the Ed25519 curve.
*   **Vite:**  Build tool for the React frontend.
*   **Tailwind CSS:** CSS framework for styling the React frontend.

## Prerequisites

Before running the project, ensure that you have the following installed:

*   **Node.js:** (>=16)  Download and install from [https://nodejs.org/](https://nodejs.org/).
*   **npm:** (Node Package Manager)  Usually included with Node.js.
*   **yarn:** Package manager (optional, can use npm instead). Install globally using `npm install -g yarn`.

## Installation Instructions

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/deveshru2712/Web-based_wallet.git
    cd Web-based_wallet
    ```

2.  **Install dependencies for the backend scripts:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Install dependencies for the React frontend:**

    ```bash
    cd react
    npm install
    # or
    yarn install
    ```

4.  **Go back to the main directory:**

    ```bash
    cd ..
    ```

## Usage Guide

### Backend Scripts

1.  **Running `index.js`:**

    This script generates a Solana keypair, prints the public and private keys to the console, signs a sample message, and verifies the signature.

    ```bash
    node index.js
    ```

    Output will show the public key, private key (as a Uint8Array), the signing result (signature), and signature verification result (`true` if successful).

2.  **Running `main.js`:**

    This script generates a mnemonic phrase, derives four keypairs from it using different derivation paths, and prints the public keys (base58 encoded) to the console.

    ```bash
    node main.js
    ```

    The output will display four Solana public keys, derived from the generated mnemonic phrase.

### React Frontend

1.  **Navigate to the `react` directory:**

    ```bash
    cd react
    ```

2.  **Start the development server:**

    ```bash
    npm run dev
    # or
    yarn dev
    ```

    This will start the React development server, typically at `http://localhost:5173/`.

3.  **Using the React App:**

    *   Open the application in your browser.
    *   Click the "Click to Generate Mnemonic" button to generate a new mnemonic phrase.
    *   A "Add wallet" button will appear. Click this button to derive Solana wallets based on the generated mnemonic. Each click will derive a new wallet with incremented index from `m/44'/501'/${index}'/0'`. The corresponding public keys will be displayed.

## API Documentation

This project doesn't expose a formal API. However, the core cryptographic functions are performed using libraries such as `@solana/web3.js`, `tweetnacl`, `bip39`, and `ed25519-hd-key`.  Refer to their respective documentations for details on their functionalities:

*   **@solana/web3.js:** [https://solana-labs.github.io/solana-web3.js/](https://solana-labs.github.io/solana-web3.js/)
*   **tweetnacl:** [https://tweetnacl.js.org/](https://tweetnacl.js.org/)
*   **bip39:** [https://github.com/bitcoinjs/bip39](https://github.com/bitcoinjs/bip39)
*   **ed25519-hd-key:** [https://github.com/web3well/hdkey](https://github.com/web3well/hdkey)

## Contributing Guidelines

Contributions are welcome! To contribute to this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive commit messages.
4.  Test your changes thoroughly.
5.  Submit a pull request.

## License Information

This project does not have a specified license.  All rights are reserved by the owner.

## Contact/Support Information

For questions or support, please contact deveshru2712 via GitHub.
