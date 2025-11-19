import Link from "next/link";
import { ChevronRight } from "lucide-react";

type BreadcrumbSegment = {
  title: string;
  href: string;
};

type BreadcrumbsProps = {
  segments: BreadcrumbSegment[];
};

export function Breadcrumbs({ segments }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex items-center gap-2">
        {segments.map((segment, index) => (
          <li key={segment.href} className="flex items-center gap-2">
            <Link
              href={segment.href}
              className={`hover:text-accent ${
                index === segments.length - 1
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {segment.title}
            </Link>
            {index < segments.length - 1 && (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
