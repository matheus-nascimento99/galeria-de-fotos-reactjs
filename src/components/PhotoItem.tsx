import { Link } from 'react-router-dom';

type Props = {
    data:{
        thumbnailUrl:string,
        id: number
    }
}

export const PhotoItem = ({ data }:Props) => {
    return (
        <Link to={`/photo/${data.id}`}><img src={data.thumbnailUrl} className="w-[200px] border-2 p-5"/></Link>
    );
}