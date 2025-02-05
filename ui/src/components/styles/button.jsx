export function Button({ children, className = "", ...props }) {
    return (
      <button
        className={`px-4 py-2 font-medium text-white bg-orange-500 rounded-lg transition-all duration-300 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  