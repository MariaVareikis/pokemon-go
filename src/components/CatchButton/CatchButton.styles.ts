export const CATCH_BUTTON_STYLES = {
  container: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000,
    paddingHorizontal: '$5',
  },

  button: {
    borderRadius: '$md',
    paddingHorizontal: '$4',
    paddingVertical: '$2',
    minWidth: 80,
    minHeight: 36,
    bg: 'rgba(220, 53, 69, 0.95)',
    shadowColor: '$black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$1.5',
  } as const,

  icon: {
    width: 16,
    height: 16,
  } as const,

  text: {
    color: '$white',
    fontWeight: '$bold',
    fontSize: '$sm',
  } as const,

  spinner: {
    size: 'small' as const,
    color: '$white',
  } as const,

  disabledButton: {
    opacity: 0.5,
    bg: 'rgba(128, 128, 128, 0.95)',
  } as const,
} as const;