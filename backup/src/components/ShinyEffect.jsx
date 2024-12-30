export const ShinyEffect = ({ left, right, top, size }) => {
  const positionStyles = {
    top: `${top}px`,
    width: `${size}px`,
    height: `${size}px`,
    left: `${left ? `${left}px` : 0}`,
    right: `${right ? `${right}px` : 0}`,
  };

  return <div className="shiny-effect" style={positionStyles}></div>;
};
