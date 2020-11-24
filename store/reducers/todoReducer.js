const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "REMOVE_TODO":
      return [...action.payload];
    default:
      return state;
  }
};

const INITIAL_STATE = [
  {
    id: 1,
    title: "React Native",
  },
  {
    id: 2,
    title: "Zzieut",
  },
];

export default todoReducer;
