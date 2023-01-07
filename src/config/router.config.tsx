import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/NoteBook.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
]);
