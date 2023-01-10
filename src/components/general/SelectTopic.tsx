import useGetTopics from "@/hooks/useGetTopics";
import { UseFormRegisterReturn } from "react-hook-form";
import Select from "../forms/Select";

interface ISelectTopicProps {
  register: UseFormRegisterReturn;
}

export default function SelectTopic({ register }: ISelectTopicProps) {
  const { data, isLoading } = useGetTopics();
  return (
    <Select {...register}>
      {!isLoading &&
        data &&
        data.length > 0 &&
        data.map((topic) => (
          <option value={topic.id} key={topic.id}>
            {topic.title}
          </option>
        ))}
    </Select>
  );
}
