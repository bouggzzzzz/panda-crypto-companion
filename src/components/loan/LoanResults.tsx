import { Button } from "@/components/ui/button";
import { Coins } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoanResultsProps {
  rate: number;
  monthly: number;
  total: number;
  collateralRequired: number;
}

export const LoanResults = ({ rate, monthly, total, collateralRequired }: LoanResultsProps) => {
  const { toast } = useToast();

  const handleApply = () => {
    toast({
      title: "Loan Application Submitted! 🎉",
      description: `Please deposit the required collateral of ${collateralRequired} Panda Tokens 🐼 to proceed.`,
    });
  };

  return (
    <div className="mt-6 p-4 bg-secondary rounded-lg space-y-3 animate-fade-in">
      <h3 className="font-semibold text-lg flex items-center">
        <Coins className="mr-2 h-5 w-5 animate-spin-slow" />
        Loan Summary
      </h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <span className="text-gray-600">Interest Rate:</span>
        <span className="font-medium">{rate.toFixed(2)}%</span>
        <span className="text-gray-600">Monthly Payment:</span>
        <span className="font-medium">${monthly.toFixed(2)}</span>
        <span className="text-gray-600">Total Payment:</span>
        <span className="font-medium">${total.toFixed(2)}</span>
        <span className="text-gray-600 font-semibold">Collateral Required:</span>
        <span className="font-medium text-primary">{collateralRequired} Panda Tokens 🐼</span>
      </div>
      
      <Button
        onClick={handleApply}
        className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white"
      >
        Apply for Loan
      </Button>
    </div>
  );
};