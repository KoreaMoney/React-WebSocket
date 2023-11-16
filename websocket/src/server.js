// server관련 된 code작성
import { io } from 'socket.io-client';

const socket = io(process.env.REACT_APP_API_URL);
export default socket;
