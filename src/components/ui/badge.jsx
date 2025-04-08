export const Badge = ({ children, className }) => {
    return (
      <span
        className={`inline-block text-xs font-semibold px-3 py-1 rounded-full bg-purple-600 text-white ${className}`}
      >
        {children}
      </span>
    );
  };
  