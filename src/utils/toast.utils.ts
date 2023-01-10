import { toast, ToastOptions } from "react-toastify";

const toastConfig: ToastOptions = {
  position: "bottom-right",
  theme: "colored",
};

export function toastSuccess(text: string) {
  toast.success(text, toastConfig);
}

export function toastError(text: string) {
  toast.error(text, toastConfig);
}
