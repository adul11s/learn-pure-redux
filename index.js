const { createStore } = require("redux");

//create init state
initialState = {
  choosenMentees: "Yasin",
  points: 0,
  mentee: [],
};

//create reducer
const reducer = (state = initialState, action) => {
  //   console.log(state);
  if (action.type === "CHOOSE_AJAY") {
    return {
      ...state,
      choosenMentees: action.mentee,
    };
  }
  if (action.type === "CHOOSE_BAGAS") {
    return {
      ...state,
      choosenMentees: action.mentee,
    };
  }
};

//create actions
const chooseAjay = { type: "CHOOSE_AJAY", mentee: "Ajay" };
const chooseBagas = { type: "CHOOSE_BAGAS", mentee: "Bagas" };

// create store
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

//dispatches
store.dispatch(chooseAjay);
store.dispatch(chooseBagas);
