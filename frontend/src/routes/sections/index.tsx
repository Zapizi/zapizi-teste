import { lazy } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import WrapperLayout from "src/layout/wrapper/wrapperLayout";
import { paths } from "../path";

const IndexPage = lazy(() => import('../../pages/painel'));

export const baseRoutes = [
    {
        path: paths.root,
        element: (
            <WrapperLayout>
                <Outlet />
            </WrapperLayout>
        ),
        children: [
            { element: <IndexPage />, index: true },
        ]
    },
];

export default function Router() {
    return useRoutes([
        ...baseRoutes,
    ]);
}