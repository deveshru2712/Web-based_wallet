import nacl from "tweetnacl";
import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";

// generating the mnemonic phrase
const mnemonic = generateMnemonic();

const seed = mnemonicToSeedSync(mnemonic);

for (let i = 0; i < 4; i++) {
  // this is path using which wallet used to  generating a public and private key from our seed
  const path = `m/44'/501'/${i}'/0'`;

  // creating a private key seed from the master seed

  {
    /*
   private key seed -> A 32-byte seed derived from the master seed using a derivation path (like derivedSeed in your code). It is essentially a raw secret value used as input to generate the actual private key pair.
    */
  }

  const derivedSeed = derivePath(path, seed.toString("hex")).key;

  // creating a key pair using the private seed
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

  // did not understand it here.
  console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}
