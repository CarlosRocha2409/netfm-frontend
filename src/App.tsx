import { RouterProvider } from "react-router-dom";
import { router } from "./config/router.config";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "./components/general/Layout";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
