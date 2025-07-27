import { isAxiosError } from 'axios';
import { SEARCH_ERROR_MESSAGES } from '@/src/constants/errorMessages';

const handleApiError = (error: unknown): string => {
  if (isAxiosError(error)) {
    switch (error.response?.status) {
      case 404:
        return SEARCH_ERROR_MESSAGES.POKEMON_NOT_FOUND;
      case 500:
        return SEARCH_ERROR_MESSAGES.SERVER_ERROR;
      case 503:
        return SEARCH_ERROR_MESSAGES.SERVICE_UNAVAILABLE;
      default:
        return SEARCH_ERROR_MESSAGES.SERVER_CONNECTION_ERROR;
    }
  }
  
  if (error instanceof Error) {
    return error.message;
  }
  
  return SEARCH_ERROR_MESSAGES.UNKNOWN_ERROR;
};

export const isNotFoundError = (error: unknown): boolean => {
  return isAxiosError(error) && error.response?.status === 404;
};

export const isServerError = (error: unknown): boolean => {
  return isAxiosError(error) && 
    error.response?.status !== undefined && 
    error.response.status >= 500;
};

export const isNetworkError = (error: unknown): boolean => {
  return isAxiosError(error) && !error.response;
};

export default handleApiError;