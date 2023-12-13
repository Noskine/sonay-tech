import { ReactNode } from "react";
import "./Container.css"

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <>
      <div className="blur1"></div>
      <div className="blur2"></div>
      <div id="container">{children}</div>
    </>
  );
}
