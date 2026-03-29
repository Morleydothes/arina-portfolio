import { PortableText, type PortableTextBlock } from "@portabletext/react";
import type { ReactNode } from "react";
type PortableTextContentProps = {
  value: PortableTextBlock[];
};

const components = {
  block: {
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="max-w-xl text-base leading-8 text-text-ink-black/72 sm:text-lg">
        {children}
      </p>
    ),
  },
};

export function PortableTextContent({ value }: PortableTextContentProps) {
  return <PortableText value={value} components={components} />;
}
