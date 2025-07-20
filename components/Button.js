// components/Button.js
'use client';

export default function Button({
  children,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center h-10 px-5 rounded-lg font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-150 break-words text-xs text-center';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600',
    success: 'bg-green-600 text-white hover:bg-green-700',
  };
  const disabledStyle = 'opacity-60 cursor-not-allowed';

  return (
    <button
      type={type}
      className={`${base} ${variants[variant] || variants.primary} ${disabled ? disabledStyle : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}