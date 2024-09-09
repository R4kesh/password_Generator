import React, { useState } from 'react';
import PasswordOptions from './components/PasswordOptions';
import PasswordDisplay from './components/PasswordDisplay';
import { Boxes } from './components/ui/background-boxes';
import { cn } from './lib/utils';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);

  const generatePassword = () => {
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    let characterPool = lowerCaseLetters;

    if (includeUppercase) {
      characterPool += upperCaseLetters;
    }
    if (includeNumbers) {
      characterPool += numbers;
    }
    if (includeSymbols) {
      characterPool += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }

    setPassword(generatedPassword);
  };

  return (
    <div className="h-screen relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />

      <div className="relative z-20 bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className={cn("md:text-4xl text-xl text-black mb-4")}>Password Generator</h1>
        <PasswordDisplay password={password} />
        <PasswordOptions
          length={length}
          setLength={setLength}
          includeUppercase={includeUppercase}
          setIncludeUppercase={setIncludeUppercase}
          includeNumbers={includeNumbers}
          setIncludeNumbers={setIncludeNumbers}
          includeSymbols={includeSymbols}
          setIncludeSymbols={setIncludeSymbols}
        />
        <button
          onClick={generatePassword}
          className="w-full mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
