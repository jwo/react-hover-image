import React from "react";

export type HoverImageProps = {
  src: string;
  hoverSrc: string;
  disabled?: boolean;
  className?: string;
  style?: any;
  onClick?: React.MouseEventHandler;
};
const HoverImage: React.FC<HoverImageProps> = ({
  src,
  hoverSrc,
  style,
  disabled,
  onClick,
  className,
}) => {
  const [imageSrc, setImageSrc] = React.useState<string>(src);

  const mouseOver = React.useCallback(() => {
    setImageSrc(hoverSrc);
  }, []);

  const mouseOut = React.useCallback(() => {
    setImageSrc(src);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (!onClick) return;
    if (!disabled) {
      onClick(e);
    }
  };

  return (
    <img
      src={imageSrc}
      style={style}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      onClick={handleClick}
      className={className}
    />
  );
};

export default HoverImage;
