import { useRoutes } from "react-router-dom";
import { Home } from '../components/Home';
import { Photos } from '../components/Photos';
import { Photo } from '../components/Photo';
import { NotFound } from "../components/404";

export const MainRoutes = () => {
    return useRoutes([
        {path:'/', element:<Home />},
        {path:'/album/:id', element:<Photos />},
        {path:'/photo/:id', element:<Photo />},
        {path:'*', element:<NotFound />}
    ]);
}