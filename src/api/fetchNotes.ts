import { api } from "@/config/api.config";

export default async function fetchNotes(page = 1, params = {}) {
  return api
    .get("/note", {
      params: {
        page,
        ...params,
      },
    })
    .then(({ data }) => {
      return data;
    });
}
