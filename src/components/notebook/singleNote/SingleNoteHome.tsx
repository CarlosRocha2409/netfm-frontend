import useGetSingleNote from "@/hooks/useGetSingleNote";
import { useParams } from "react-router-dom";
import { styled } from "twin.macro";
import Note from "../Note";

const SNContainer = styled.div``;

export default function SingleNoteHome() {
  const { noteId } = useParams();
  const { data, isLoading } = useGetSingleNote({
    id: noteId ? +noteId : 1,
  });
  return (
    <SNContainer>
      {!isLoading && data !== undefined && <Note note={data} />}
    </SNContainer>
  );
}
