import { COLORS } from '@/src/constants/colors';

export const ERROR_BOUNDARY_STYLES = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    p: "$5",
  },
  emoji: {
    fontSize: "$6xl",
    mb: "$5",
    textAlign: "center",
  },
  errorTitle: {
    color: "$white",
    fontSize: "$2xl",
    fontWeight: "$bold",
    textAlign: "center",
    mb: "$3",
    textShadowColor: COLORS.BLACK_30,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  errorSubtext: {
    color: COLORS.WHITE_90,
    fontSize: "$md",
    textAlign: "center",
    fontWeight: "$medium",
    lineHeight: "$lg",
  },
} as const;
