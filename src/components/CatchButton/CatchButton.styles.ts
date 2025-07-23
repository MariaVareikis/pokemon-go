export const CATCH_BUTTON_STYLES = {
  container: {
    position: 'absolute',
    bottom: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
    zIndex: 1000,
    paddingHorizontal: 20,
  },

  button: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    minWidth: 80,
    minHeight: 36,
    backgroundColor: 'rgba(220, 53, 69, 0.95)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  } as const,

  icon: {
    width: 16,
    height: 16,
  } as const,

  text: {
    color: 'white',
    fontWeight: 'bold' as const,
    fontSize: 14,
  } as const,

  spinner: {
    width: 16,
    height: 16,
    size: 'small',
    color: 'white',
  } as const,
  disabledButton: {
    opacity: 0.5,
  },
} as const;
