import { lazy } from "react";
import { Navigate } from "react-router-dom";
const Home = lazy(() => import(/*webpackChunkName:'home'*/ "../component/home"));
const Default = lazy(() => import(/*webpackChunkName:'default'*/ "../component/default"));
const SmallCar = lazy(() => import(/*webpackChunkName:'default'*/ "../component/smallCar/smallCar"));
const Table = lazy(() => import(/*webpackChunkName:'default'*/ "../component/table/table"));

const routes = [
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/default',
        element: <Default />
    },
    {
        path: '/smallCar',
        element: <SmallCar />
    },
    {
        path: '/table',
        element: <Table />
    },
    {
        path: '/',
        element: <Navigate to='/home' />
    }
]
export default routes
