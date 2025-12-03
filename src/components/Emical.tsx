import { useState, useEffect } from "react";
import { Car, Calendar, Percent, IndianRupee, TrendingUp } from "lucide-react";

export default function Emical() {
  const [carPrice, setCarPrice] = useState(1200000);
  const [downPayment, setDownPayment] = useState(240000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(5);
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const calculateEMI = () => {
      const principal = carPrice - downPayment;
      const monthlyRate = interestRate / 12 / 100;
      const months = loanTenure * 12;

      if (principal <= 0 || monthlyRate <= 0 || months <= 0) {
        setEmi(0);
        setTotalInterest(0);
        setTotalAmount(0);
        return;
      }

      const emiAmount =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

      const totalPayment = emiAmount * months;
      const interestPayment = totalPayment - principal;

      setEmi(Math.round(emiAmount));
      setTotalInterest(Math.round(interestPayment));
      setTotalAmount(Math.round(totalPayment + downPayment));
    };
    return () => calculateEMI();
  }, [carPrice, downPayment, interestRate, loanTenure]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const principalAmount = carPrice - downPayment;
  const principalPercentage =
    principalAmount > 0 ? (principalAmount / totalAmount) * 100 : 0;
  const interestPercentage =
    totalInterest > 0 ? (totalInterest / totalAmount) * 100 : 0;

  return (
    <div className="h-full  bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-6">
      <div className="max-w-xl mx-auto flex flex-col overflow-y-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
            <Car className="w-10 h-10 text-indigo-600" />
            Car EMI Calculator
          </h1>
          <p className="text-gray-600 text-sm">
            Calculate your monthly car loan payments
          </p>
        </div>

        <div className="flex flex-col gap-6 overflow-y-auto h-fit">
          <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Loan Details
            </h2>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Car className="w-4 h-4" />
                  Car Price
                </label>
                <span className="text-lg font-bold text-indigo-600">
                  {formatCurrency(carPrice)}
                </span>
              </div>
              <input
                type="range"
                min="500000"
                max="5000000"
                step="50000"
                value={carPrice}
                onChange={(e) => setCarPrice(Number(e.target.value))}
                className="w-full h-2 bg-indigo-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹5L</span>
                <span>₹50L</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <IndianRupee className="w-4 h-4" />
                  Down Payment
                </label>
                <span className="text-lg font-bold text-indigo-600">
                  {formatCurrency(downPayment)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={carPrice * 0.5}
                step="10000"
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>₹0</span>
                <span>
                  {Math.round((downPayment / carPrice) * 100)}% of price
                </span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Percent className="w-4 h-4" />
                  Interest Rate (per annum)
                </label>
                <span className="text-lg font-bold text-indigo-600">
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="20"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-orange-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>5%</span>
                <span>20%</span>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Loan Tenure
                </label>
                <span className="text-lg font-bold text-indigo-600">
                  {loanTenure} Years
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="7"
                step="1"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>1 Year</span>
                <span>7 Years</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow-xl p-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-6 h-6" />
                <h3 className="text-lg font-semibold opacity-90">
                  Monthly EMI
                </h3>
              </div>
              <p className="text-3xl font-bold mb-2">{formatCurrency(emi)}</p>
              <p className="text-sm opacity-80">Pay this amount every month</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <p className="text-sm text-gray-600 mb-1">Principal Amount</p>
                <p className="text-2xl font-bold text-gray-800">
                  {formatCurrency(principalAmount)}
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <p className="text-sm text-gray-600 mb-1">Total Interest</p>
                <p className="text-2xl font-bold text-orange-600">
                  {formatCurrency(totalInterest)}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <p className="text-sm text-gray-600 mb-2">Total Amount Payable</p>
              <p className="text-3xl font-bold text-gray-800 mb-4">
                {formatCurrency(totalAmount)}
              </p>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Principal</span>
                  <span className="font-semibold">
                    {principalPercentage.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden flex">
                  <div
                    className="bg-indigo-600 h-full transition-all duration-500"
                    style={{ width: `${principalPercentage}%` }}
                  ></div>
                  <div
                    className="bg-orange-500 h-full transition-all duration-500"
                    style={{ width: `${interestPercentage}%` }}
                  ></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Interest</span>
                  <span className="font-semibold">
                    {interestPercentage.toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 mb-3">Loan Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Down Payment:</span>
                  <span className="font-semibold">
                    {formatCurrency(downPayment)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Loan Amount:</span>
                  <span className="font-semibold">
                    {formatCurrency(principalAmount)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Payments:</span>
                  <span className="font-semibold">
                    {loanTenure * 12} months
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
