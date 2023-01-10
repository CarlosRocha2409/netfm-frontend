import fetchTopics from "@/api/fetchTopics";
import { ITopic } from "@/types/topic.type";
import { useQuery } from "react-query";

export default function useGetTopics() {
  const query = useQuery<ITopic[]>(["notes"], {
    queryFn: fetchTopics,
  });
  return query;
}
