import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// here we are generating the keys
const keypair = Keypair.generate();

// converting it to string for readability and ease of storing it it the db
const publicKey = keypair.publicKey.toString();
const privateKey = keypair.secretKey;

console.log("Public key:", publicKey);
console.log("Private Key :", privateKey);

// converting the string to a uint8Array -> that is into a binary representation
const message = new TextEncoder().encode("hello world");

// signing the message using the secret key
{
  /* we are creating a signature so that we can verify that has been done by the user and also verify its integrity*/
}

const signature = nacl.sign.detached(message, privateKey);

// verifies the signature
const result = nacl.sign.detached.verify(
  message,
  signature,
  keypair.publicKey.toBytes()
);

console.log(result);
