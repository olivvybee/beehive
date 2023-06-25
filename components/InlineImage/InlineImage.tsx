import classNames from 'classnames';

import styles from './InlineImage.module.css';

interface InlineImageProps {
  src: string;
  alt: string;
  imageWidth: number;
  imageHeight: number;
  imagePosition?: 'left' | 'right';
  imageClassName?: string;
  align?: 'top' | 'center' | 'bottom';
  children: React.ReactNode;
}

export const InlineImage = ({
  src,
  alt,
  imageWidth,
  imageHeight,
  imagePosition = 'left',
  imageClassName,
  align = 'top',
  children,
}: InlineImageProps) => {
  const className = classNames([styles.wrapper], {
    [styles.leftImage]: imagePosition === 'left',
    [styles.rightImage]: imagePosition === 'right',
    [styles.alignTop]: align === 'top',
    [styles.alignCenter]: align === 'center',
    [styles.alignBottom]: align === 'bottom',
  });

  return (
    <div className={className}>
      <img
        className={imageClassName}
        src={src}
        alt={alt}
        width={imageWidth}
        height={imageHeight}
      />
      <div>{children}</div>
    </div>
  );
};
