import { useState, FormEvent } from "react";
import { cn } from "@/utils";
import { Loader2 } from "lucide-react";

interface NetlifyFormProps {
  name: string;
  children: React.ReactNode;
  className?: string;
  submitText?: string;
  successMessage?: string;
  onSuccess?: () => void;
}

export function NetlifyForm({ 
  name, 
  children, 
  className, 
  submitText = "Submit",
  successMessage = "Thank you! Your submission has been received.",
  onSuccess
}: NetlifyFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData as unknown as Record<string, string>).toString()
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
        if (onSuccess) onSuccess();
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("There was a problem submitting your form. Please try again later.");
    }
  };

  if (status === "success" && !onSuccess) {
    return (
      <div className="p-8 text-center bg-green-50 border border-green-200 rounded-2xl dark:bg-green-900/20 dark:border-green-800">
        <h3 className="text-xl font-bold text-green-800 dark:text-green-400 mb-2">Success!</h3>
        <p className="text-green-700 dark:text-green-500">{successMessage}</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <form 
      name={name} 
      data-netlify="true" 
      netlify-honeypot="bot-field" 
      onSubmit={handleSubmit}
      className={cn("space-y-6", className)}
    >
      <input type="hidden" name="form-name" value={name} />
      <p className="hidden">
        <label>
          Don’t fill this out if you're human: <input name="bot-field" />
        </label>
      </p>
      
      {children}

      {status === "error" && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm border border-red-200">
          {errorMessage}
        </div>
      )}

      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="w-full flex items-center justify-center py-3.5 px-8 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Submitting...
          </>
        ) : submitText}
      </button>
    </form>
  );
}
