import { Link } from 'react-router-dom';
type Props = {
    data:{
        id:number,
        title:string
    }
}
export const AlbumItem = ({ data }:Props) => {
    return (
        <Link to={`/album/${data.id}`}><li className="border-2 w-100 p-4 hover:bg-gray-400 hover:text-white cursor-pointer my-2">{data.title}</li></Link>
    );
}