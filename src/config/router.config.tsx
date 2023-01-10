import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/pages/NoteBook.page";
import Layout from "@/components/general/Layout";
import CreateNotePage from "@/pages/CreateNote.page";
import NotePage from "@/pages/Note.page";
import EditNotePage from "@/pages/EditNote.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/new",
    element: (
      <Layout>
        <CreateNotePage />
      </Layout>
    ),
  },
  {
    path: "/:noteId",
    element: (
      <Layout>
        <NotePage />
      </Layout>
    ),
  },
  {
    path: "/:noteId/edit",
    element: (
      <Layout>
        <EditNotePage />
      </Layout>
    ),
  },
]);
