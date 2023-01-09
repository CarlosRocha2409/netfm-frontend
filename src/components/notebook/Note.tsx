import { INote } from "@/types/note.type";
import { convertDate } from "@/utils/api.utils";
import tw, { styled } from "twin.macro";

import noteImg from "@/assets/note.png";

const NContainer = styled.div``;
const NHeader = styled.div`
  ${tw`flex justify-between items-center`}

  h3 {
    ${tw`font-marker text-2xl m-0 self-start`}
  }
  h4 {
    ${tw`self-end text-left font-pen text-xl`}
  }
`;
const NBody = styled.div`
  p {
    ${tw`font-pen text-lg`}
  }
  div {
    ${tw`flex gap-1 items-center font-pen font-black leading-[1px]`}
    img {
      ${tw`h-4 w-4`}
    }
  }
`;

interface INoteProps {
  note: INote;
}

export default function Note({ note }: INoteProps) {
  return (
    <NContainer>
      <NHeader>
        <h3>{note.title}</h3>
        <h4>{convertDate(note.creation)}</h4>
      </NHeader>
      <NBody>
        <div>
          <img src={noteImg} />
          <h5>{note.topic.title}</h5>
        </div>
        <p>{note.body}</p>
      </NBody>
    </NContainer>
  );
}
