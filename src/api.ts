import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

export const api = {
    getAlbums: async () => {
        let response  = await instance.get('/albums');
        return response.data;
    },
    getAlbum: async (id:any) => {
        let response  = await instance.get(`/albums/${id}`);
        return response.data;
    },
    getPhotos: async (id:any) => {
        let response  = await instance.get(`/albums/${id}/photos`);
        return response.data;
    },
    getPhoto: async (id:any) => {
        let response = await instance.get(`/photos/${id}`);
        return response.data;
    }
}