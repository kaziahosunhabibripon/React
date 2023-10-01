import { useState, useCallback, useEffect } from "react";

const Password = () => {
  const [length, setLength] = useState(8);
  const [numberAlow, setNumberAlow] = useState(false);
  const [charAlow, setCharAlow] = useState(false);

  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAlow) str += "0123456789";
    if (charAlow) str += "!@#$%^&*()_+-={}[]:~";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAlow, charAlow, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAlow, charAlow, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-8 text-orange-500 bg-gray-700">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            className="outline-none w-full py-1 px-3"
            type="text"
            value={password}
            placeholder="password"
            readOnly
          />
          <button
            className="outline-none bg-blue-700 text-white py-0.5 px-3 shrink-0"
            onClick={passwordGenerator}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={e => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAlow}
              onChange={() => {
                setNumberAlow(prev => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAlow}
              onChange={() => {
                setCharAlow(prev => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Password;
