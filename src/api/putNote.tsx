import { api } from "@/config/api.config";
import { INoteUpdate } from "@/types/note.type";

export default async function putNote({ id, ...body }: INoteUpdate) {
  return api
    .put(`/note/${id}`, {
      ...body,
    })
    .then(({ data }) => {
      return data;
    });
}
