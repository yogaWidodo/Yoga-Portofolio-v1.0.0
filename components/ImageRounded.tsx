interface ImageRoundedProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageRounded = ({ src, alt, className = "" }: ImageRoundedProps) => {
  return (
    <img
      alt={alt}
      className={`rounded-xl shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-700 ${className}`}
      src={src}
    />
  );
};

export default ImageRounded;
