import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};
export const Container = ({ children }: TContainerProps) => {
  return <div className=" mx-auto max-w-7xl  h-screen">{children}</div>;
};
