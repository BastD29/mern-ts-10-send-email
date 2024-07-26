import { FC, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "../Loader/Loader";
import { routes } from "../../routes";

const App: FC = () => {
  const router = createBrowserRouter(routes);

  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default App;
