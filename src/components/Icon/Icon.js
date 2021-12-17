import sprite from '../../images/sprite.svg';

const Icon = ({ className, iconName, width, height, fill, stroke }) => {
  return (
    <svg
      className={`icon icon-${iconName} ${className}`}
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
    >
      <use xlinkHref={`${sprite}#${iconName}`}></use>
    </svg>
  );
};

export default Icon;
