import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Send, User, Mail, Phone, FileText } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  notes: string;
}

const LoanAdmissionForm = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "🎉 Application Sent!",
        description: "Our team will review it and get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        notes: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Apply for Your Loan</h2>
        <p className="text-gray-600">Fill out the form below to get started</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <User className="h-4 w-4" />
            Full Name *
          </label>
          <Input
            required
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="transition-all duration-200 hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Enter your full name"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email Address *
          </label>
          <Input
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="transition-all duration-200 hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Enter your email"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Phone Number (optional)
          </label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="transition-all duration-200 hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Enter your phone number"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Additional Notes (optional)
          </label>
          <Textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            className="min-h-[100px] transition-all duration-200 hover:border-primary focus:border-primary focus:ring-2 focus:ring-primary/20"
            placeholder="Any additional information you'd like to share..."
          />
        </div>

        <Button
          type="submit"
          className="w-full group hover:scale-[1.02] transition-all duration-200"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              Submitting...
              <Send className="h-4 w-4 animate-bounce" />
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Apply for Loan
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default LoanAdmissionForm;