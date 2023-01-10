import { ReactNode } from "react";
import tw, { styled } from "twin.macro";

const CFormControl = styled.div`
  ${tw`flex flex-col gap-1 justify-items-start`}
  label {
    ${tw`font-pen text-lg`}
  }
  > p {
    ${tw`font-pen text-red-600`}
  }
`;
const EFormControl = styled.p``;

interface IFCProps {
  label: string;
  errorMsg?: string;
  required?: boolean;
  children: ReactNode;
}

export default function FormControl({
  label,
  errorMsg,
  required,
  children,
}: IFCProps) {
  return (
    <CFormControl>
      <label>
        {label}
        {required && "*"}
      </label>
      {children}
      {errorMsg && <EFormControl>{errorMsg}</EFormControl>}
    </CFormControl>
  );
}
