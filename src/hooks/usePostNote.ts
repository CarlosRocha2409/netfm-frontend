import postNote from "@/api/postNote";
import { toastSuccess } from "@/utils/toast.utils";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";

export default function usePostNote() {
  const navigate = useNavigate();
  return useMutation(postNote, {
    mutationKey: ["note"],
    onSuccess: () => {
      toastSuccess("Succesfully posted note");
      navigate("/");
    },
  });
}
