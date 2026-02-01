import Image from "next/image";

interface ImageRoundedProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageRounded = ({ src, alt, className = "" }: ImageRoundedProps) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Image
        alt={alt}
        src={src.startsWith("/") ? src : `/${src}`}
        fill
        className="rounded-xl shadow-2xl opacity-90 hover:opacity-100 transition-opacity duration-700 object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ImageRounded;
