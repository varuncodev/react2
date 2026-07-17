import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Copy, Check, RefreshCw, Save, Trash2, KeyRound, X } from 'lucide-react';

const MIN_LEN = 6;
const MAX_LEN = 32;

const App = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [copied, setCopied] = useState(false);
  const [savedPasswords, setSavedPasswords] = useState([]);
  const [savedCopiedIndex, setSavedCopiedIndex] = useState(null);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+';

    let pool = lower + upper;
    if (includeNumbers) pool += numbers;
    if (includeSymbols) pool += symbols;

    let pass = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * pool.length);
      pass += pool.charAt(randomIndex);
    }
    setPassword(pass);
  }, [length, includeNumbers, includeSymbols]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = async (text, onDone) => {
    try {
      await navigator.clipboard.writeText(text);
      onDone();
    } catch {
      if (passwordRef.current) {
        passwordRef.current.select();
        document.execCommand('copy');
        onDone();
      }
    }
  };

  const copyPassword = () => {
    copyToClipboard(password, () => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const copySaved = (pw, index) => {
    copyToClipboard(pw, () => {
      setSavedCopiedIndex(index);
      setTimeout(() => setSavedCopiedIndex(null), 1500);
    });
  };

  const resetSettings = () => {
    setLength(16);
    setIncludeNumbers(true);
    setIncludeSymbols(false);
  };

  const savePassword = () => {
    setSavedPasswords((prev) => [password, ...prev].slice(0, 8));
  };

  const removeSaved = (index) => {
    setSavedPasswords((prev) => prev.filter((_, i) => i !== index));
  };

  // Strength score 0-5, drives the tumbler-pin indicator
  let score = 0;
  if (length >= 8) score += 1;
  if (length >= 12) score += 1;
  if (length >= 16) score += 1;
  if (includeNumbers) score += 1;
  if (includeSymbols) score += 1;

  const pinColor =
    score <= 2 ? 'bg-rose-500' : score <= 3 ? 'bg-amber-500' : 'bg-emerald-500';
  const strengthLabel =
    score <= 2 ? 'Flimsy lock' : score <= 3 ? 'Solid lock' : 'Vault grade';
  const strengthTextColor =
    score <= 2 ? 'text-rose-400' : score <= 3 ? 'text-amber-400' : 'text-emerald-400';

  return (
    <div className="min-h-screen w-full bg-stone-950 flex items-center justify-center p-6">
      <style>{`
        .ks-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          border-radius: 9999px;
          outline: none;
        }
        .ks-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #f5f5f4;
          border: 3px solid #d97706;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
          transition: transform 0.15s ease;
        }
        .ks-slider::-webkit-slider-thumb:hover {
          transform: scale(1.15);
        }
        .ks-slider::-moz-range-thumb {
          width: 18px;
          height: 18px;
          border-radius: 9999px;
          background: #f5f5f4;
          border: 3px solid #d97706;
          cursor: pointer;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
          transition: transform 0.15s ease;
        }
        .ks-slider::-moz-range-thumb:hover {
          transform: scale(1.15);
        }
        .ks-slider::-moz-range-track {
          height: 6px;
          border-radius: 9999px;
          background: transparent;
        }
      `}</style>
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-md bg-stone-900 border border-stone-800 flex items-center justify-center">
            <KeyRound className="w-5 h-5 text-amber-500" strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="font-mono text-lg tracking-wide text-stone-100">
              Password Generator
            </h1>
            <p className="text-xs text-stone-500">Forge a password worth locking away</p>
          </div>
        </div>

        {/* Main card */}
        <div className="bg-stone-900 border border-stone-800 rounded-lg p-5 shadow-xl shadow-black/30">
          {/* Password display */}
          <div className="flex items-stretch gap-2 mb-5">
            <input
              type="text"
              readOnly
              value={password}
              ref={passwordRef}
              onFocus={(e) => e.target.select()}
              className="flex-1 min-w-0 bg-stone-950 border border-stone-800 rounded-md px-3 py-3 font-mono text-base text-stone-100 tracking-wider truncate focus:outline-none focus:border-amber-600"
            />
            <button
              onClick={copyPassword}
              aria-label="Copy password"
              className="shrink-0 w-12 rounded-md border border-stone-800 bg-stone-950 hover:bg-stone-800 hover:border-amber-700 transition-colors flex items-center justify-center text-stone-300"
            >
              {copied ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Strength meter */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-xs text-stone-500">Strength</span>
              <span className={`text-xs font-mono ${strengthTextColor}`}>
                {strengthLabel}
              </span>
            </div>
            <div className="h-2 w-full rounded-full bg-stone-800 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-300 ease-out ${pinColor}`}
                style={{ width: `${(score / 5) * 100}%` }}
              />
            </div>
          </div>

          {/* Length slider */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="length" className="text-sm text-stone-400">
                Length
              </label>
              <span className="font-mono text-sm text-amber-400">{length}</span>
            </div>
            <input
              id="length"
              type="range"
              min={MIN_LEN}
              max={MAX_LEN}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="ks-slider w-full cursor-pointer"
              style={{
                background: `linear-gradient(to right, #d97706 0%, #d97706 ${
                  ((length - MIN_LEN) / (MAX_LEN - MIN_LEN)) * 100
                }%, #292524 ${
                  ((length - MIN_LEN) / (MAX_LEN - MIN_LEN)) * 100
                }%, #292524 100%)`,
              }}
            />
            <div className="flex justify-between text-[10px] text-stone-600 font-mono mt-1">
              <span>{MIN_LEN}</span>
              <span>{MAX_LEN}</span>
            </div>
          </div>

          {/* Toggles styled as tumbler switches */}
          <div className="space-y-3 mb-6">
            <ToggleRow
              label="Numbers"
              sublabel="0–9"
              checked={includeNumbers}
              onChange={setIncludeNumbers}
            />
            <ToggleRow
              label="Symbols"
              sublabel="!@#$%^&*"
              checked={includeSymbols}
              onChange={setIncludeSymbols}
            />
          </div>

          {/* Actions */}
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={resetSettings}
              className="flex items-center justify-center gap-1.5 rounded-md border border-stone-800 bg-stone-950 hover:bg-stone-800 text-stone-300 text-sm py-2.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              Reset
            </button>
            <button
              onClick={generatePassword}
              className="flex items-center justify-center gap-1.5 rounded-md border border-stone-800 bg-stone-950 hover:bg-stone-800 text-stone-300 text-sm py-2.5 transition-colors"
            >
              <KeyRound className="w-3.5 h-3.5" />
              New
            </button>
            <button
              onClick={savePassword}
              className="flex items-center justify-center gap-1.5 rounded-md border border-amber-700 bg-amber-600/10 hover:bg-amber-600/20 text-amber-400 text-sm py-2.5 transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              Save
            </button>
          </div>
        </div>

        {/* Saved passwords */}
        {savedPasswords.length > 0 && (
          <div className="mt-5">
            <p className="text-xs text-stone-500 mb-2 font-mono tracking-wide">
              SAVED ({savedPasswords.length})
            </p>
            <div className="space-y-1.5">
              {savedPasswords.map((pw, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-stone-900 border border-stone-800 rounded-md px-3 py-2"
                >
                  <span className="flex-1 min-w-0 font-mono text-sm text-stone-300 truncate">
                    {pw}
                  </span>
                  <button
                    onClick={() => copySaved(pw, index)}
                    aria-label="Copy saved password"
                    className="shrink-0 text-stone-500 hover:text-amber-400 transition-colors"
                  >
                    {savedCopiedIndex === index ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    onClick={() => removeSaved(index)}
                    aria-label="Remove saved password"
                    className="shrink-0 text-stone-500 hover:text-rose-400 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ToggleRow = ({ label, sublabel, checked, onChange }) => (
  <div className="flex items-center justify-between">
    <div>
      <p className="text-sm text-stone-300">{label}</p>
      <p className="text-xs text-stone-600 font-mono">{sublabel}</p>
    </div>
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`relative w-11 h-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-amber-600 focus:ring-offset-2 focus:ring-offset-stone-900 ${
        checked ? 'bg-amber-600' : 'bg-stone-700'
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-stone-100 transition-transform ${
          checked ? 'translate-x-5' : 'translate-x-0'
        }`}
      />
    </button>
  </div>
);

export default App;