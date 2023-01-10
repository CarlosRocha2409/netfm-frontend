import usePostNote from "@/hooks/usePostNote";
import { INote, INoteInput } from "@/types/note.type";
import { useForm } from "react-hook-form";
import tw, { styled } from "twin.macro";
import Button from "../forms/Button";
import FormControl from "../forms/FormControl";
import Input from "../forms/Input";
import TextArea from "../forms/TextArea";
import SelectTopic from "../general/SelectTopic";

const NFForm = styled.form`
  ${tw`flex flex-col gap-3`}
`;
const NRowForm = styled.div`
  ${tw`grid grid-cols-2  gap-4`}
`;

interface INoteFormProps {
  note?: INote;
}

export default function NoteForm({ note }: INoteFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<INoteInput>({
    defaultValues: {
      title: note?.title ?? "",
      body: note?.body ?? "",
      topicId: note && note.topic ? note.topic.id : 1,
    },
  });

  const { mutate: create } = usePostNote();

  const handleNoteFormSubmit = (data: INoteInput) => {
    if (note) {
      return;
    } else {
      create(data);
    }
  };

  return (
    <NFForm onSubmit={handleSubmit(handleNoteFormSubmit)}>
      <NRowForm>
        <FormControl
          label="Title"
          required={true}
          errorMsg={errors.title?.message}
        >
          <Input
            {...register("title", {
              required: "Please provide a valid title",
            })}
          />
        </FormControl>

        <FormControl label="Topic">
          <SelectTopic register={register("topicId")} />
        </FormControl>
      </NRowForm>

      <FormControl label="Body" required={true} errorMsg={errors.body?.message}>
        <TextArea
          rows={5}
          {...register("body", {
            required: "Please provide a valid description",
          })}
        />
      </FormControl>
      <Button type="submit">Add Note</Button>
    </NFForm>
  );
}
