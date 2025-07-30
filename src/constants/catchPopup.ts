import { CATCH_MESSAGES, CATCH_STYLES } from '@/src/constants/catch';

export const POPUP_CONFIG = {
  success: {
    emoji: CATCH_STYLES.SUCCESS_EMOJI,
    message: CATCH_MESSAGES.SUCCESS,
    color: CATCH_STYLES.SUCCESS_COLOR,
  },
  failure: {
    emoji: CATCH_STYLES.FAILURE_EMOJI,
    message: CATCH_MESSAGES.FAILURE,
    color: CATCH_STYLES.FAILURE_COLOR,
  },
} as const;
