import axiosInstance from '../axios/axiosConfig';
import { CONSTANTS } from '../../utilities/constants';

export const fetchMovies = async () => {
  try {
    const response = await axiosInstance.get('/movies');
    return response.data;
  } catch (error) {
    console.error(CONSTANTS.API_ERRORS.FETCH_MOVIES_ERROR, error);
    throw error;
  }
};

export const fetchMovieById = async (id: number) => {
  try {
    const response = await axiosInstance.get(`/movies/${id}`);
    return response.data;
  } catch (error) {
    console.error(`${CONSTANTS.API_ERRORS.FETCH_MOVIE_DETAIL_ERROR}${id}):`, error);
    throw error;
  }
};
