const Button = ({ 
  children, 
  onClick, 
  variant = "primary", 
  size = "md", 
  className = "",
  disabled = false,
  type = "button"
}) => {
  const baseClasses = "font-semibold rounded-lg transition-all duration-300";
  
  const variants = {
    primary: "bg-orange-600 hover:bg-orange-500 text-white",
    secondary: "bg-zinc-700 hover:bg-zinc-600 text-white",
    outline: "border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white",
    ghost: "text-orange-400 hover:bg-orange-500/20"
  };
  
  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
