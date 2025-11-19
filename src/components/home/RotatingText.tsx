import { PawPrint } from 'lucide-react';

export function RotatingText() {
  return (
    <div className="absolute top-1/2 right-10 transform -translate-y-1/2">
      <div className="relative w-40 h-40">
        <div className="absolute inset-0 animate-spin-slow">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path id="circlePath" fill="none" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            <text>
              <textPath href="#circlePath" className="text-sm font-semibold tracking-wider uppercase fill-primary">
                PAL Foundation • PAL Foundation •
              </textPath>
            </text>
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center">
                <PawPrint className="w-10 h-10 text-primary-foreground" />
            </div>
        </div>
      </div>
    </div>
  );
}
