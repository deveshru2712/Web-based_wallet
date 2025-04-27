import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair, PublicKey } from "@solana/web3.js";
import nacl from "tweetnacl";

type WalletProps = {
  mnemonic: string;
};

const Wallet = ({ mnemonic }: WalletProps) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [publicKeys, setPublicKeys] = useState<PublicKey[]>([]);

  const handleAddWallet = async () => {
    const seed = mnemonicToSeed(mnemonic);
    const path = `m/44'/501'/${currentIndex}'/0'`;

    const derivedSeed = derivePath(path, (await seed).toString("hex")).key;

    const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

    const keypair = Keypair.fromSecretKey(secret);

    setCurrentIndex(currentIndex + 1);
    setPublicKeys([...publicKeys, keypair.publicKey]);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <button
        className="rounded-md text-lg font-semibold px-4 py-2 text-white bg-black hover:bg-gray-800 transition-colors"
        onClick={handleAddWallet}
      >
        Add wallet
      </button>

      <div className="mt-4">
        <h3 className="font-medium">Public Keys:</h3>
        {publicKeys.map((key, index) => (
          <div key={index} className="mt-2 p-2 bg-gray-100 rounded break-words">
            {key.toBase58()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallet;
