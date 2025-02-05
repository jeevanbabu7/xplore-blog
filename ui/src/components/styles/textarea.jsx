export function Textarea({ className = "", ...props }) {
    return (
      <textarea
        className={`w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all duration-300 ${className}`}
        {...props}
      />
    );
  }
  