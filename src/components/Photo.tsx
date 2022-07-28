import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { api } from '../api';

export const Photo = () => {
    const params = useParams();

    const [photoUrl, setPhotoUrl] = useState('');
    const [photoTitle, setPhotoTitle] = useState('');
    const [load, setLoad] = useState(false);

    useEffect(()=>{
        loadPhoto();
    },[]);

    const loadPhoto = async () => {
        setLoad(true);
        let json = await api.getPhoto(params.id);
        setPhotoUrl(json.url);
        setPhotoTitle(json.title);
        setLoad(false);
    }

    return (
        <div>
            {load && 
                <p>Carregando...</p>
            }

            {!load &&
                <div className='my-10'>
                    <p>{photoTitle}</p>
                    <img src={photoUrl} alt="" />
                </div>
            }
        </div>
    );
}