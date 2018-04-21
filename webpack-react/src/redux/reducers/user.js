const user = (
  state = {
    name: '',
    email: '',
  },
  action,
) => {
  switch (action.type) {
    case 'EDIT_USER_NAME':
      return { ...state, name: action.name };
    default:
      return state;
  }
};
export default user;
