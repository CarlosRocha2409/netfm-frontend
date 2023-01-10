import tw, { styled } from "twin.macro";
import NoteForm from "../NoteForm";

const CNhome = styled.div`
  h1 {
    ${tw`font-marker`}
  }
`;

export default function CreateNoteHome() {
  return (
    <CNhome>
      <h1>New Note</h1>
      <NoteForm />
    </CNhome>
  );
}
