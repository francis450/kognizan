import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
};

export default function BrandLogo({ className, imageClassName }: BrandLogoProps) {
  return (
    <Link to="/" className={cn('inline-flex items-center', className)} aria-label="Kognizan Technologies Limited home">
      <img
        src="/kognizannewlogobg.png"
        alt="Kognizan Technologies Limited"
        className={cn('h-12 w-auto object-contain', imageClassName)}
      />
    </Link>
  );
}
