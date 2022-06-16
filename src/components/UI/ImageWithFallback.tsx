// import { ImageProps } from "next/image";
import React, { useEffect, useState } from "react";

// type TImageOptions = Omit<ImageProps, "src" | "alt">;
type TProps = {
  src: string;
  fallbackSrc?: string;
  alt?: string;
  // options?: TImageOptions;
  onError?: React.ReactEventHandler<HTMLImageElement>;
};

function ImageWithFallback({
  src,
  fallbackSrc = "/images/fallback-image.jpg",
  alt,
  // options,
  onError,
}: TProps) {
  const [imageSource, setImageSource] = useState(src || fallbackSrc);

  useEffect(() => {
    setImageSource(src);
  }, [src]);

  const handleOnError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    setImageSource(fallbackSrc);

    if (onError) {
      onError(e);
    }
  };

  // const defaultOptions: TImageOptions = {
  //   layout: "fill",
  //   objectFit: "contain",
  // };

  // const imageLoader = (src: string, { width, quality }: TImageOptions) => {
  //   return `${src}?w=${width ?? 1920}&q=${quality ?? 75}`;
  // };

  return (
    <figure className="relative h-full w-full">
      <img
        src={imageSource}
        // loader={() => imageLoader(imageSource, options ?? {})}
        alt={alt}
        onError={handleOnError}
        {...{
          // ...defaultOptions,
          // ...options,
        }}
      />
    </figure>
  );
}

export default ImageWithFallback;
