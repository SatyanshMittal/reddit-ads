"use client";
import { useState } from "react";
import useCurrencyInfo from "@/hooks/useCurrencyInfo";

export default function TestPage() {
  const [currency, setCurrency] = useState("usd");
  const currencyData = useCurrencyInfo(currency);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Currency API Test</h1>
        
        <div className="mb-6">
          <label htmlFor="currency" className="block text-sm font-medium mb-2">
            Select Currency:
          </label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="bg-zinc-900 border border-zinc-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="usd">USD - US Dollar</option>
            <option value="eur">EUR - Euro</option>
            <option value="gbp">GBP - British Pound</option>
            <option value="jpy">JPY - Japanese Yen</option>
            <option value="inr">INR - Indian Rupee</option>
            <option value="cad">CAD - Canadian Dollar</option>
            <option value="aud">AUD - Australian Dollar</option>
          </select>
        </div>

        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Exchange Rates for {currency.toUpperCase()}
          </h2>
          
          <div className="space-y-2">
            {Object.keys(currencyData).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(currencyData).slice(0, 20).map(([key, value]) => (
                  <div
                    key={key}
                    className="bg-zinc-800 border border-zinc-700 rounded p-4 hover:border-purple-500 transition-colors"
                  >
                    <div className="text-sm text-zinc-400 uppercase">{key}</div>
                    <div className="text-xl font-semibold text-purple-400">
                      {typeof value === 'number' ? value.toFixed(6) : String(value)}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-zinc-400">Loading currency data...</div>
            )}
          </div>
        </div>

        <div className="mt-8 bg-zinc-900 border border-zinc-700 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-3">Raw Data (Console)</h3>
          <p className="text-sm text-zinc-400">
            Check your browser console to see the raw data being logged by the hook.
          </p>
          <pre className="mt-4 bg-zinc-950 border border-zinc-800 rounded p-4 overflow-auto text-xs">
            {JSON.stringify(currencyData, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}


