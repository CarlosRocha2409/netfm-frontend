import putNote from "@/api/putNote";
import { toastSuccess } from "@/utils/toast.utils";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export default function usePutNote() {
  const navigate = useNavigate();
  return useMutation(putNote, {
    mutationKey: ["noteEdit"],
    onSuccess: () => {
      toastSuccess("Succesfully edited note");
      navigate("/");
    },
  });
}
