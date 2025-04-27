import { useState } from "react";
import { generateMnemonic } from "bip39";
import Wallet from "./components/wallet";

const App = () => {
  const [mnemonic, setMnemonic] = useState<string | null>(null);

  const onClickHandler = () => {
    const newMnemonic = generateMnemonic(256);
    setMnemonic(newMnemonic);
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      {mnemonic ? (
        <Wallet mnemonic={mnemonic} />
      ) : (
        <>
          <button
            className="rounded-md text-lg font-semibold px-4 py-2 text-white bg-black cursor-pointer"
            onClick={onClickHandler}
          >
            Click to Generate Mnemonic
          </button>
        </>
      )}
    </div>
  );
};

export default App;
