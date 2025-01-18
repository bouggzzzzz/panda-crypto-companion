import LoanCalculator from "@/components/LoanCalculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
          Welcome to PandaRates 🐼
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Your friendly crypto loan calculator with a panda-tastic twist!
        </p>
        
        {/* Calculator Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-8">Calculate Your Crypto Loan</h2>
            <LoanCalculator />
          </div>
        </div>
        
        {/* Features Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">AI-Powered Calculations</h3>
            <p className="text-gray-600">Get accurate interest rates powered by advanced algorithms.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Real-Time Updates</h3>
            <p className="text-gray-600">Stay informed with live cryptocurrency market data.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Secure & Transparent</h3>
            <p className="text-gray-600">Your data is protected while calculations remain transparent.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;