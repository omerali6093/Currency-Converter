import { useState } from "react";
import InputBox from "./componenets/InputBox";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, hsl(222 47% 11%) 0%, hsl(270 50% 15%) 50%, hsl(222 47% 11%) 100%)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{ background: 'hsla(270, 60%, 50%, 0.3)' }}
        ></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{ background: 'hsla(187, 85%, 53%, 0.3)', animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ background: 'hsla(240, 60%, 50%, 0.2)', animationDelay: '2s' }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsla(0, 0%, 100%, 0.1) 1px, transparent 1px), linear-gradient(90deg, hsla(0, 0%, 100%, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>

      <div className="w-full max-w-lg relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#f8fafc] text-foreground mb-3 tracking-tight">
            Currency{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: 'linear-gradient(to right, hsl(187 85% 53%), hsl(270 60% 65%))' }}
            >
              Converter
            </span>
          </h1>
          <p className="text-muted-foreground text-sm md:text-base text-[#94a3b8]">Real-time exchange rates at your fingertips</p>
        </div>

        {/* Main Card */}
        <div
          className="backdrop-blur-xl rounded-3xl p-6 md:p-8 border shadow-2xl"
          style={{
            background: 'hsla(0, 0%, 100%, 0.1)',
            borderColor: 'hsla(0, 0%, 100%, 0.2)',
            boxShadow: '0 25px 50px -12px hsla(270, 60%, 50%, 0.15)'
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* From Input */}
            <div className="mb-3">
              <InputBox
                className="text-[#f8fafc]"
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            {/* Swap Button */}
            <div className="relative flex justify-center my-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" style={{ borderColor: 'hsla(0, 0%, 100%, 0.1)' }}></div>
              </div>
              <button
                type="button"
                className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center text-foreground transition-all duration-300 group hover:scale-110 active:scale-95"
                style={{
                  background: 'linear-gradient(to right, hsl(187 85% 53%), hsl(270 60% 50%))',
                  boxShadow: '0 10px 30px -5px hsla(270, 60%, 50%, 0.4)'
                }}
                onClick={swap}
              >
                <svg
                  className="w-5 h-5 transform group-hover:rotate-180 transition-transform duration-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </button>
            </div>

            {/* To Input */}
            <div className="mb-6">
              <InputBox
                className="text-[#f8fafc]"
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full text-foreground font-bold py-4 px-6 rounded-2xl text-lg uppercase tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
              style={{
                background: 'linear-gradient(to right, hsl(187 85% 53%), hsl(270 60% 50%), hsl(330 80% 60%))',
                boxShadow: '0 10px 30px -5px hsla(270, 60%, 50%, 0.4)'
              }}
            >
              <span className="relative z-10 text-[#f8fafc]">
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </span>
            </button>
          </form>


        </div>


      </div>
    </div>
  );
}

export default App;
