import { INote } from "@/types/note.type";
import { convertDate } from "@/utils/api.utils";
import tw, { styled } from "twin.macro";

import noteImg from "@/assets/note.png";
import edit from "@/assets/edit.png";
import { Link } from "react-router-dom";

const NoteContainer = styled.div``;
const NoteHeader = styled.div`
  ${tw`grid grid-cols-1 md:flex md:justify-between items-center`}

  div {
    ${tw`flex gap-2 items-center`}
    img {
      ${tw`w-5 h-5 duration-300`}
      &:hover {
        transform: translateY(-5px);
      }
    }
  }

  h3 {
    ${tw`font-marker text-2xl m-0 self-start duration-500 hover:text-secondary-dark`}
  }
  h4 {
    ${tw`self-end text-left font-pen text-xl`}
  }
`;
const NoteBody = styled.div`
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
    <NoteContainer>
      <NoteHeader>
        <div>
          <Link to={`/${note.id}`}>
            <h3>{note.title}</h3>
          </Link>
          <Link to={`/${note.id}/edit`}>
            <img src={edit} alt="edit" />
          </Link>
        </div>
        <h4>{convertDate(note.date)}</h4>
      </NoteHeader>
      <NoteBody>
        <div>
          <img src={noteImg} />
          <h5>{note.topic.title}</h5>
        </div>
        <p>{note.body}</p>
      </NoteBody>
    </NoteContainer>
  );
}
