const SectionTitle = ({ title, subtitle, className = "" }) => {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-gray-400 text-lg">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
