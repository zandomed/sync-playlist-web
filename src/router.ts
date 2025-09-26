import {
    createBrowserRouter
} from "react-router";

const router = createBrowserRouter([

    {
        path: "/login",
        lazy: {
            Component: async () => (await import("./pages/auth/login")).default,
        }
    },
]);

export { router }