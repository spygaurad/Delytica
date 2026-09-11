import { ViewTransition } from "react";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-fade" default="none">
      {children}
    </ViewTransition>
  );
}
