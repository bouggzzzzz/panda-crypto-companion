import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, DollarSign } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const cryptoOptions = [
  { value: "BTC", label: "Bitcoin (BTC)" },
  { value: "ETH", label: "Ethereum (ETH)" },
  { value: "SOL", label: "Solana (SOL)" },
];

const LoanCalculator = () => {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [crypto, setCrypto] = useState("");
  const [results, setResults] = useState<null | {
    rate: number;
    monthly: number;
    total: number;
  }>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const { toast } = useToast();

  const calculateLoan = () => {
    if (!amount || !term || !crypto) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your loan.",
        variant: "destructive",
      });
      return;
    }

    setIsCalculating(true);
    
    // Simulate API call
    setTimeout(() => {
      const baseRate = 0.05; // 5% base rate
      const cryptoMultiplier = crypto === "BTC" ? 1 : crypto === "ETH" ? 1.2 : 1.5;
      const rate = baseRate * cryptoMultiplier;
      const monthlyRate = rate / 12;
      const monthlyPayment = 
        (Number(amount) * monthlyRate * Math.pow(1 + monthlyRate, Number(term))) /
        (Math.pow(1 + monthlyRate, Number(term)) - 1);
      
      setResults({
        rate: rate * 100,
        monthly: monthlyPayment,
        total: monthlyPayment * Number(term),
      });
      
      setIsCalculating(false);
      
      toast({
        title: "Calculation Complete! 🐼",
        description: "Your loan details are ready to view.",
      });
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Loan Amount (USD)</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Loan Term (Months)</label>
          <Input
            type="number"
            placeholder="Enter term in months"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Cryptocurrency</label>
          <Select value={crypto} onValueChange={setCrypto}>
            <SelectTrigger>
              <SelectValue placeholder="Select cryptocurrency" />
            </SelectTrigger>
            <SelectContent>
              {cryptoOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={calculateLoan}
          className="w-full"
          disabled={isCalculating}
        >
          {isCalculating ? (
            <span className="flex items-center">
              Calculating...
              <Calculator className="ml-2 h-4 w-4 animate-spin" />
            </span>
          ) : (
            <span className="flex items-center">
              Calculate Rate
              <Calculator className="ml-2 h-4 w-4" />
            </span>
          )}
        </Button>

        {results && (
          <div className="mt-6 p-4 bg-secondary rounded-lg space-y-3">
            <h3 className="font-semibold text-lg">Loan Summary</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <span className="text-gray-600">Interest Rate:</span>
              <span className="font-medium">{results.rate.toFixed(2)}%</span>
              <span className="text-gray-600">Monthly Payment:</span>
              <span className="font-medium">${results.monthly.toFixed(2)}</span>
              <span className="text-gray-600">Total Payment:</span>
              <span className="font-medium">${results.total.toFixed(2)}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;