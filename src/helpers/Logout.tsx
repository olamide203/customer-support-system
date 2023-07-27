import { useNavigate } from 'react-router-dom';
import { removeToken } from '../hooks/constants/axiosInstance';

export default function LogOut() {
    removeToken();
    window.location.href = '/login';

    return;
}
