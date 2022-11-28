import { FC } from "react";
interface IReservedFormError {
  children: React.ReactNode;
}

export const ReservedFormError: FC<IReservedFormError> = ({ children }) => {
  return <p>{children}</p>;
};
