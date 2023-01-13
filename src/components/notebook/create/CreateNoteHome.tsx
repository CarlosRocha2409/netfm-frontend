import tw, { styled } from "twin.macro";
import NoteForm from "../NoteForm";

const CreateNoteContainer = styled.div`
  h1 {
    ${tw`font-marker`}
  }
`;

export default function CreateNoteHome() {
  return (
    <CreateNoteContainer>
      <h1>New Note</h1>
      <NoteForm />
    </CreateNoteContainer>
  );
}
