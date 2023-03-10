import useGetSingleNote from "@/hooks/useGetSingleNote";
import { useParams } from "react-router-dom";
import tw, { styled } from "twin.macro";
import NoteForm from "../NoteForm";

const NoteEditContainer = styled.div`
  h1 {
    ${tw`font-marker`}
  }
`;

export default function NoteEditHome() {
  const { noteId } = useParams();
  const { data, isLoading } = useGetSingleNote({
    id: noteId ? +noteId : 1,
  });

  return (
    <NoteEditContainer>
      <h1>Edit Note</h1>
      {!isLoading && data && <NoteForm note={data} />}
    </NoteEditContainer>
  );
}
