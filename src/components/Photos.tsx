import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../api';
import { Images } from '../types/Photos';
import { PhotoItem } from './PhotoItem';

export const Photos = () => {
    const params = useParams();

    const [album, setAlbumName] = useState('');
    const [photos, setPhotos] = useState<Images[]>([]);
    const [load, setLoad] = useState(false);
    

    useEffect(()=>{
        loadPhotos();
    },[]);

    const loadPhotos = async () => {
        setLoad(true);
        let jsonAlbum = await api.getAlbum(params.id);
        setAlbumName(jsonAlbum.title);

        let json = await api.getPhotos(params.id);
        setPhotos(json);
        setLoad(false);

    }

    

    return (
        <div>
            {load &&
                <p>Carregando...</p>
            }
            
            {!load &&
                <div>
                    <h1 className="text-3xl font-semibold">{album}</h1>

                    <div className="grid grid-cols-5 gap-2 block my-10">
                        {photos.map((item, index)=>(
                            <PhotoItem key={index} data={item} />
                        ))}
                    </div>
                </div>
            }

        </div>
    );
}