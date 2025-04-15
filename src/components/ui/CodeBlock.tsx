
import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
}

export function CodeBlock({ code, language = "jsx", fileName }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 overflow-hidden rounded-lg border bg-background">
      {fileName && (
        <div className="flex items-center gap-2 border-b bg-muted px-4 py-1.5">
          <span className="text-xs font-medium">{fileName}</span>
        </div>
      )}
      <pre className="overflow-x-auto p-4 text-sm">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-md border bg-background text-muted-foreground transition-colors hover:bg-accent"
      >
        {copied ? (
          <Check className="h-4 w-4" />
        ) : (
          <Copy className="h-4 w-4" />
        )}
        <span className="sr-only">Copy code</span>
      </button>
    </div>
  );
}
