const BounceCards = ({
  className = "",
  images = [],
  containerWidth = 500,
  containerHeight = 250,
  animationDelay = 0,
  animationStagger = 0.08,
  easeType = "ease-out",
  transformStyles = [],
  enableHover = true,
}) => {
  return (
    <div
      className={`bounce-cards ${className}`.trim()}
      style={{
        width: `${containerWidth}px`,
        height: `${containerHeight}px`,
      }}
    >
      {images.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`bounce-card-slot ${enableHover ? "bounce-card-slot-hover" : ""}`}
          style={{
            transform: `translate(-50%, -50%) ${
              transformStyles[index] || "rotate(0deg) translate(0px)"
            }`,
            animationDelay: `${animationDelay + index * animationStagger}s`,
            animationTimingFunction: easeType.includes("elastic")
              ? "cubic-bezier(0.22, 1, 0.36, 1)"
              : easeType,
            zIndex: images.length - index,
          }}
        >
          <img
            src={image}
            alt={`dish-${index + 1}`}
            className="bounce-card"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default BounceCards;
