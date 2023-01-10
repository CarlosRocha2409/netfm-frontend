import { api } from "@/config/api.config";
import { INoteInput } from "@/types/note.type";

export default async function postNote(input: INoteInput) {
  return api
    .post("/note", {
      ...input,
    })
    .then(({ data }) => {
      return data;
    });
}
