import Button from "@/components/forms/Button";
import FormControl from "@/components/forms/FormControl";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import { useNoteQueryStore } from "@/stores/noteQueries.store";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import tw, { styled } from "twin.macro";

const SIContainer = styled.form`
  ${tw`grid grid-cols-1 xl:grid-cols-[70% 30%] gap-1`}
  div {
    ${tw`grid grid-cols-1 xl:grid-cols-[50% 50%]`}
  }
`;

const BY_TITLE = 1;
const BY_CONTENT = 2;

interface ISearchNote {
  option: number;
  text: string;
}

export default function SearchInput({ sync }: { sync: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISearchNote>();

  const { register: setQuery } = useNoteQueryStore();

  const searchNotes: SubmitHandler<ISearchNote> = ({ option, text }) => {
    if (+option === BY_TITLE) setQuery({ title: text, body: "" });
    if (+option === BY_CONTENT) setQuery({ body: text, title: "" });
    sync();
  };

  return (
    <FormControl label="Search" errorMsg={errors.text?.message}>
      <SIContainer onSubmit={handleSubmit(searchNotes)}>
        <div className="bg-secondary-dark">
          <Input
            {...register("text", { required: "Cannot search an empty string" })}
          />
          <Select {...register("option")}>
            <option value={BY_TITLE}>By Title</option>
            <option value={BY_CONTENT}>By Content</option>
          </Select>
        </div>
        <Button type="submit">Search</Button>
      </SIContainer>
    </FormControl>
  );
}
