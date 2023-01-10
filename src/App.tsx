import { RouterProvider } from "react-router-dom";
import { router } from "./config/router.config";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
