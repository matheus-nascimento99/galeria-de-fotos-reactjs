import {api} from '../api';
import {useState, useEffect} from 'react';
import { Albums } from '../types/Albums';
import { AlbumItem } from './AlbumItem';
export const Home = () => {

    const [albums, setAlbums] = useState<Albums[]>([]);
    const [load, setLoad] = useState(false);

    useEffect(()=>{
        loadAlbums();
    },[])

    const loadAlbums = async () => {
        setLoad(true);
        let json = await api.getAlbums();
        setAlbums(json);
        setLoad(false)
    }

    return (
        <div>
            {load && 
                <p>Carregando...</p>
            }

            {!load && 
                <div className='my-10'>
                    <ul>
                        {albums.map((item,index)=>(
                            <AlbumItem key={index} data={item}/>
                        ))}
                    </ul>
                </div>
            }
        </div>
    );
}