import React from 'react';
import { cn } from "../lib/utils"

function PasswordOptions({
  length, setLength,
  includeUppercase, setIncludeUppercase,
  includeNumbers, setIncludeNumbers,
  includeSymbols, setIncludeSymbols
}) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className={cn("font-semibold")}>Password Length</label>
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="border rounded-lg p-2 w-16 text-center"
          min="4"
          max="20"
        />
      </div>
      <div className="flex justify-between items-center">
        <label className="font-semibold">Include Uppercase Letters</label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
      </div>
      <div className="flex justify-between items-center">
        <label className={cn("font-semibold")}>Include Numbers</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
      </div>
      <div className="flex justify-between items-center">
        <label className="font-semibold">Include Symbols</label>
        <input 
          type="checkbox"
          checked={includeSymbols}
          onChange={(e) => setIncludeSymbols(e.target.checked)}
          className={cn("form-checkbox h-5 w-5 text-blue-600")}
        />
      </div>
    </div>
  );
}

export default PasswordOptions;
