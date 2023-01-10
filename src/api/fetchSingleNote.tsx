import { api } from "@/config/api.config";
import { INote } from "@/types/note.type";

export default async function fetchSingleNote(id: number): Promise<INote> {
  return api.get(`/note/${id}`).then(({ data }) => {
    return data;
  });
}
