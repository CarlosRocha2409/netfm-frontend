import React from "react";
import usePostNote from "@/hooks/usePostNote";
import usePutNote from "@/hooks/usePutNote";
import { INote, INoteInput } from "@/types/note.type";
import { useForm } from "react-hook-form";
import tw, { styled } from "twin.macro";
import Button from "../forms/Button";
import FormControl from "../forms/FormControl";
import Input from "../forms/Input";
import TextArea from "../forms/TextArea";
import SelectTopic from "../general/SelectTopic";
import Spinner from "../general/Spinner";

const NoteFormContainer = styled.form`
  ${tw`flex flex-col gap-3`}
`;
const NoteRowForm = styled.div`
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

  const { mutate: create, isLoading: isCreating } = usePostNote();
  const { mutate: edit, isLoading: isEditing } = usePutNote();

  const handleNoteFormSubmit = (data: INoteInput) => {
    if (note) {
      edit({
        id: note.id,
        ...data,
      });
    } else {
      create(data);
    }
  };

  return (
    <NoteFormContainer onSubmit={handleSubmit(handleNoteFormSubmit)}>
      <NoteRowForm>
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
      </NoteRowForm>

      <FormControl label="Body" required={true} errorMsg={errors.body?.message}>
        <TextArea
          rows={5}
          {...register("body", {
            required: "Please provide a valid description",
          })}
        />
      </FormControl>
      <Button type="submit">
        {!isCreating && !isEditing ? (
          <>{note ? "Edit" : "Create"} Note</>
        ) : (
          <Spinner />
        )}
      </Button>
    </NoteFormContainer>
  );
}
