import tw, { styled } from "twin.macro";
import Button from "../forms/Button";
import plus from "@/assets/plus.png";
import goback from "@/assets/return.png";

import { useLocation, useNavigate } from "react-router-dom";

const NewBtn = styled(Button)`
  ${tw`rounded-full`}
  img {
    ${tw`h-6`}
    &:hover {
      transition: 0.5s;
      transform: rotate(-180deg);
    }
  }
`;

export default function NewButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonAction = () => {
    if (location.pathname === "/") {
      navigate("/new");
    } else {
      navigate("/");
    }
  };
  return (
    <NewBtn onClick={handleButtonAction}>
      {location.pathname === "/" && <img src={plus} alt="plus" />}
      {location.pathname !== "/" && <img src={goback} alt="goback" />}
    </NewBtn>
  );
}
