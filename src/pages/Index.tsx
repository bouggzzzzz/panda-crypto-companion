import LoanCalculator from "@/components/LoanCalculator";
import LoanAdmissionForm from "@/components/LoanAdmissionForm";
import { Twitter } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white relative overflow-hidden">
      {/* Social Media Links */}
      <div className="absolute top-4 right-4 z-10">
        <a
          href="https://x.com/PandaRates"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary transition-colors duration-200"
          aria-label="Follow us on Twitter"
        >
          <Twitter className="w-6 h-6 animate-bounce-slight" />
        </a>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-10">₿</div>
        <div className="absolute top-40 right-20 text-6xl animate-float opacity-10" style={{ animationDelay: "1s" }}>Ξ</div>
        <div className="absolute bottom-40 left-30 text-6xl animate-float opacity-10" style={{ animationDelay: "2s" }}>◎</div>
      </div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center relative">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 animate-fade-in">
          Welcome to PandaRates 🐼
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Your friendly crypto loan calculator with a panda-tastic twist!
        </p>
        
        {/* Calculator Section */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl mb-16">
            <h2 className="text-2xl font-semibold mb-8">Calculate Your Crypto Loan</h2>
            <LoanCalculator />
          </div>
        </div>

        {/* Loan Application Form Section */}
        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
            <LoanAdmissionForm />
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-semibold mb-4">AI-Powered Calculations</h3>
            <p className="text-gray-600">Get accurate interest rates powered by advanced algorithms.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-semibold mb-4">Real-Time Updates</h3>
            <p className="text-gray-600">Stay informed with live cryptocurrency market data.</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-200">
            <h3 className="text-xl font-semibold mb-4">Secure & Transparent</h3>
            <p className="text-gray-600">Your data is protected while calculations remain transparent.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;