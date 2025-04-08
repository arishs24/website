export const Card = ({ children, className }) => (
    <div className={`rounded-lg bg-gray-800 p-6 shadow-md ${className || ""}`}>
      {children}
    </div>
  );
  
  export const CardHeader = ({ children, className }) => (
    <div className={`mb-4 ${className || ""}`}>{children}</div>
  );
  
  export const CardTitle = ({ children, className }) => (
    <h2 className={`text-2xl font-bold text-white ${className || ""}`}>{children}</h2>
  );
  
  export const CardContent = ({ children, className }) => (
    <div className={className}>{children}</div>
  );
  