import { api } from "@/config/api.config";
import { ITopic } from "@/types/topic.type";

export default async function fetchTopics(): Promise<ITopic[]> {
  return api.get("/topic").then(({ data }) => {
    return data;
  });
}
