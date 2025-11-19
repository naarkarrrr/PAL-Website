
import { Logo } from '../shared/Logo';

export function RotatingText() {
  return (
    <div className="relative w-40 h-40">
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <defs>
            <path id="circlePath" fill="none" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
          </defs>
          <text>
            <textPath href="#circlePath" className="text-sm font-semibold tracking-wider uppercase fill-primary">
                PETS - LOVE - BETTER - HEALTHY -
            </textPath>
          </text>
        </svg>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center p-2 shadow-md">
             <Logo />
          </div>
      </div>
    </div>
  );
}
