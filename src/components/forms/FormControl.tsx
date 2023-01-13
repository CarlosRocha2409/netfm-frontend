import { ReactNode } from "react";
import tw, { styled } from "twin.macro";

const FormControlContainer = styled.div`
  ${tw`flex flex-col gap-1 justify-items-start`}
  label {
    ${tw`font-pen text-lg`}
  }
`;
const FormControlError = styled.p`
  ${tw`font-pen text-red-600`}
`;

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
    <FormControlContainer>
      <label>
        {label}
        {required && "*"}
      </label>
      {children}
      {errorMsg && <FormControlError>{errorMsg}</FormControlError>}
    </FormControlContainer>
  );
}
