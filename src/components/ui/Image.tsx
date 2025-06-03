import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { twMerge } from 'tailwind-merge';

interface ImageProps extends Omit<NextImageProps, 'alt'> {
    alt: string;
    className?: string;
}

export const Image: React.FC<ImageProps> = ({
    alt,
    className,
    priority,
    ...props
}) => {
    const defaultClassName = 'transition-opacity duration-300';
    const mergedClassName = twMerge(defaultClassName, className);

    return (
        <NextImage
            {...props}
            alt={alt}
            className={mergedClassName}
            priority={priority}
            quality={85}
            loading={priority ? 'eager' : 'lazy'}
            sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             33vw"
        />
    );
};
