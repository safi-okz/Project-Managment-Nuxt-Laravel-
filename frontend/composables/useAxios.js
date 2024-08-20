import axios from 'axios';

export default function useAxios() {
        const rtConfig = useRuntimeConfig();

        let api = axios.create({
            baseURL: rtConfig.public.API_URL,
            headers: {
                Accept: 'application/json',
                "Content-Type": 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            withCredentials: true,
            withXSRFToken: true
        });
}