import useGetSingleNote from "@/hooks/useGetSingleNote";
import { useParams } from "react-router-dom";
import { styled } from "twin.macro";
import Note from "../Note";

const SingleNoteContainer = styled.div``;

export default function SingleNoteHome() {
  const { noteId } = useParams();
  const { data, isLoading } = useGetSingleNote({
    id: noteId ? +noteId : 1,
  });
  return (
    <SingleNoteContainer>
      {!isLoading && data !== undefined && <Note note={data} />}
    </SingleNoteContainer>
  );
}
