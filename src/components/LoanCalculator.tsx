import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { PandaMascot } from "./loan/PandaMascot";
import { LoanResults } from "./loan/LoanResults";

const cryptoOptions = [
  { value: "BTC", label: "Bitcoin (BTC)", icon: "₿" },
  { value: "ETH", label: "Ethereum (ETH)", icon: "Ξ" },
  { value: "SOL", label: "Solana (SOL)", icon: "◎" },
];

const LoanCalculator = () => {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [crypto, setCrypto] = useState("");
  const [results, setResults] = useState<null | {
    rate: number;
    monthly: number;
    total: number;
    collateralRequired: number;
  }>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [mascotState, setMascotState] = useState<"idle" | "thinking" | "happy" | "error">("idle");
  const { toast } = useToast();

  const calculateLoan = () => {
    if (!amount || !term || !crypto) {
      setMascotState("error");
      toast({
        title: "Missing Information",
        description: "Please fill in all fields to calculate your loan.",
        variant: "destructive",
      });
      return;
    }

    setIsCalculating(true);
    setMascotState("thinking");
    
    // Fun easter egg
    if (amount === "420" || amount === "69") {
      toast({
        title: "Nice choice! 😎",
        description: "Our panda approves of your humor!",
      });
    }
    
    // Simulate API call
    setTimeout(() => {
      const baseRate = 0.05; // 5% base rate
      const cryptoMultiplier = crypto === "BTC" ? 1 : crypto === "ETH" ? 1.2 : 1.5;
      const rate = baseRate * cryptoMultiplier;
      const monthlyRate = rate / 12;
      const monthlyPayment = 
        (Number(amount) * monthlyRate * Math.pow(1 + monthlyRate, Number(term))) /
        (Math.pow(1 + monthlyRate, Number(term)) - 1);
      
      // Calculate collateral required (2x the loan amount due to 50% LTV)
      const collateralRequired = Number(amount) * 2;
      
      setResults({
        rate: rate * 100,
        monthly: monthlyPayment,
        total: monthlyPayment * Number(term),
        collateralRequired,
      });
      
      setIsCalculating(false);
      setMascotState("happy");
      
      toast({
        title: "Calculation Complete! 🐼",
        description: `Your loan details are ready. Required collateral: ${collateralRequired} Panda Tokens 🐼`,
      });
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-8">
      <PandaMascot state={mascotState} />
      
      <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Loan Amount (USD)</label>
          <div className="relative">
            <DollarSign className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <Input
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
                setMascotState("idle");
              }}
              className="pl-10 transition-all duration-200 hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Loan Term (Months)</label>
          <Input
            type="number"
            placeholder="Enter term in months"
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
              setMascotState("idle");
            }}
            className="transition-all duration-200 hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Cryptocurrency</label>
          <Select 
            value={crypto} 
            onValueChange={(value) => {
              setCrypto(value);
              setMascotState("idle");
            }}
          >
            <SelectTrigger className="transition-all duration-200 hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20">
              <SelectValue placeholder="Select cryptocurrency" />
            </SelectTrigger>
            <SelectContent>
              {cryptoOptions.map((option) => (
                <SelectItem 
                  key={option.value} 
                  value={option.value}
                  className="flex items-center space-x-2"
                >
                  <span className="font-mono">{option.icon}</span>
                  <span>{option.label}</span>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button
          onClick={calculateLoan}
          className="w-full group hover:scale-[1.02] transition-all duration-200"
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
              <Calculator className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-200" />
            </span>
          )}
        </Button>

        {results && <LoanResults {...results} />}
      </div>
    </div>
  );
};

export default LoanCalculator;