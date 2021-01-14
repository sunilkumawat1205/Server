import axios from 'axios';
import { FETCH_USER } from './types.js';

export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user');
        dispatch({type: FETCH_USER, payload : res.data});
    };

export const handleToken = (Token) => async dispatch => {
      const res = await axios.post('/api/stripe' , Token);
      dispatch({type: FETCH_USER ,  payload: res.data});
};
