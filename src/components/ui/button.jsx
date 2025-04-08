export const Button = ({ children, onClick, className }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all ${className}`}
      >
        {children}
      </button>
    );
  };
  