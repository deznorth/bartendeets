
export const commonSelectors = {
  selectState: state => state,
  selectShared: state => state.shared,
  selectCurrentUser: state => commonSelectors.selectShared(state)?.currentUser,
  // Shared

  // User
  selectIsAuthenticated: state => !!commonSelectors.selectCurrentUser(state),
};

export const createSelectors = additionalSelectors => ({
  ...commonSelectors,
  ...additionalSelectors,
});
