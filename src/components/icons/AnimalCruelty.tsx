import { SVGProps } from 'react';

export function AnimalCrueltyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M14.5 16.5a2.5 2.5 0 1 0-5 0" />
        <path d="M9 16H8a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h1" />
        <path d="M16 16h1a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4h-1" />
        <path d="M12 3v13" />
        <path d="M10 21h4" />
    </svg>
  );
}
