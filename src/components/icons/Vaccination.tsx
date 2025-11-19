import { SVGProps } from 'react';

export function VaccinationIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="m12 2 4.9 4.9" />
        <path d="M12 2v5" />
        <path d="M12 2H8.5" />
        <path d="m7.1 7.1 4.9 4.9" />
        <path d="m7.1 7.1-1.4 1.4" />
        <path d="M12 12v5" />
        <path d="M12 12h-5" />
    </svg>
  );
}
