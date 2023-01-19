const initialState = {
  user: {
    name: "Sumit Singh",
    email: "sumikumar1608@gmail.com",
    photo: "https://i.imgur.com/6VBx3io.png",
  },
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default userData;

