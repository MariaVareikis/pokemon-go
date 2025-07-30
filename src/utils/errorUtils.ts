import { isAxiosError } from 'axios';
import { StatusCodes } from 'http-status-codes';
import { SEARCH_ERROR_MESSAGES } from '@/src/constants/errorMessages';

const STATUS_CODE_MESSAGES = {
  [StatusCodes.NOT_FOUND]: SEARCH_ERROR_MESSAGES.POKEMON_NOT_FOUND,
  [StatusCodes.INTERNAL_SERVER_ERROR]: SEARCH_ERROR_MESSAGES.SERVER_ERROR,
  [StatusCodes.SERVICE_UNAVAILABLE]: SEARCH_ERROR_MESSAGES.SERVICE_UNAVAILABLE,
} as const;

const handleApiError = (error: unknown): string => {
  if (isAxiosError(error)) {
    const status = error.response?.status;
    return (
      STATUS_CODE_MESSAGES[status as keyof typeof STATUS_CODE_MESSAGES] ||
      SEARCH_ERROR_MESSAGES.SERVER_CONNECTION_ERROR
    );
  }

  return SEARCH_ERROR_MESSAGES.UNKNOWN_ERROR;
};

export default handleApiError;
