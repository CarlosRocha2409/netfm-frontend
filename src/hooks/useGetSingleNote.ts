import fetchSingleNote from "@/api/fetchSingleNote";
import { INote } from "@/types/note.type";
import { useQuery } from "react-query";

export default function useGetSingleNote({ id }: { id: number }) {
  return useQuery<INote>(["ticket", id], {
    queryFn: () => fetchSingleNote(id),
  });
}
