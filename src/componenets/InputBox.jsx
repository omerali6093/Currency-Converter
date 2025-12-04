import React from 'react';
import { useId } from 'react';

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div 
      className={`backdrop-blur-md p-5 rounded-2xl border transition-all duration-300 ${className}`}
      style={{
        background: 'hsla(0, 0%, 100%, 0.1)',
        borderColor: 'hsla(0, 0%, 100%, 0.2)'
      }}
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label 
            htmlFor={amountInputId} 
            className="text-xs font-semibold uppercase tracking-wider mb-2 block"
            style={{ color: 'hsl(187 85% 80%)' }}
          >
            {label}
          </label>
          <input
            id={amountInputId}
            className="w-full rounded-xl px-4 py-3.5 text-foreground text-lg font-medium outline-none transition-all duration-300 placeholder-muted-foreground"
            style={{
              background: 'hsla(0, 0%, 100%, 0.05)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'hsla(0, 0%, 100%, 0.1)'
            }}
            type="number"
            placeholder="Enter amount"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            onFocus={(e) => {
              e.target.style.borderColor = 'hsla(187, 85%, 53%, 0.5)';
              e.target.style.background = 'hsla(0, 0%, 100%, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'hsla(0, 0%, 100%, 0.1)';
              e.target.style.background = 'hsla(0, 0%, 100%, 0.05)';
            }}
          />
        </div>
        <div className="sm:w-40">
          <p 
            className="text-xs font-semibold uppercase tracking-wider mb-2 block"
            style={{ color: 'hsl(187 85% 80%)' }}
          >
            Currency
          </p>
          <select
            className="w-full rounded-xl px-4 py-3.5 text-foreground font-medium uppercase cursor-pointer outline-none transition-all duration-300 appearance-none"
            style={{
              background: 'hsla(0, 0%, 100%, 0.05)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'hsla(0, 0%, 100%, 0.1)',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23ffffff'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 12px center',
              backgroundSize: '16px',
            }}
            value={selectCurrency}
            onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            disabled={currencyDisable}
            onFocus={(e) => {
              e.target.style.borderColor = 'hsla(187, 85%, 53%, 0.5)';
              e.target.style.background = 'hsla(0, 0%, 100%, 0.1)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'hsla(0, 0%, 100%, 0.1)';
              e.target.style.background = 'hsla(0, 0%, 100%, 0.05)';
            }}
          >
            {currencyOptions.map((currency) => (
              <option 
                key={currency} 
                value={currency}
                style={{ background: 'hsl(222 47% 11%)', color: 'white' }}
              >
                {currency.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
