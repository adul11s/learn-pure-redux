const { createStore } = require("redux");

//create init state
initialState = {
  choosenMentees: "Yasin",
  points: 0,
  mentee: [],
  hoby: [],
  favoriteFood: "ayam Sonez",
  favoriteColor: "Red",
  height: "167cm",
  weight: 50,
  address: { apartment: "jalan candi", home: "purworejo" },
  telephoneNumber: { axis: "089812345", simpati: "0812123456" },
  favoriteMentor: "Kobar",
};

//create reducer
const reducer = (state = initialState, action) => {
  //   console.log(state);
  switch (action.type) {
    case "CHOOSE_MENTEE":
      return {
        ...state,
        choosenMentees: action.payload,
      };
    case "ADD_POINT":
      return {
        ...state,
        points: state.points + action.points,
      };
    case "ADD_MENTEE":
      return {
        ...state,
        mentee: state.mentee.concat(action.mentee),
      };
    case "ADD_HOBY":
      return {
        ...state,
        hoby: state.hoby.concat(action.hoby),
      };
    case "REMOVE_HOBY":
      return {
        ...state,
        hoby: state.hoby.filter((hoby) => hoby !== action.hoby),
      };
    case "FAVORITE_FOOD":
      return {
        ...state,
        favoriteFood: action.food,
      };
    case "FAVORITE_COLOR":
      return {
        ...state,
        favoriteColor: action.color,
      };
    case "ADD_HEIGHT":
      return {
        ...state,
        height: action.height,
      };
    case "ADD_WEIGHT":
      return {
        ...state,
        weight: state.weight + action.weight,
      };
    case "ADD_ADDRESS":
      return {
        ...state,
        address: {
          apartment: state.address.apartment + ", " + action.apartment,
          home: state.address.home + ", " + action.home,
        },
      };
    case "TELEPHONE_NUMBER":
      return {
        ...state,
        telephoneNumber: {
          axis: state.telephoneNumber.axis + ", " + action.axis,
          simpati: state.telephoneNumber.simpati + ", " + action.simpati,
        },
      };
    case "FAVORITE_MENTOR":
      return {
        ...state,
        favoriteMentor: action.mentor,
      };
  }
};

//create actions
// const chooseAjay = { type: "CHOOSE_AJAY", mentee: "Ajay" };
// const chooseBagas = { type: "CHOOSE_BAGAS", mentee: "Bagas" };

const chooseMentee = (payload) => ({ type: "CHOOSE_MENTEE", payload });
const addPoint = (points) => ({ type: "ADD_POINT", points });
const addMentee = (mentee) => ({ type: "ADD_MENTEE", mentee });
const addHoby = (hoby) => ({ type: "ADD_HOBY", hoby });
const removeHoby = (hoby) => ({ type: "REMOVE_HOBY", hoby });
const currentFood = (food) => ({ type: "FAVORITE_FOOD", food });
const currentColor = (color) => ({ type: "FAVORITE_COLOR", color });
const currentHeight = (height) => ({ type: "ADD_HEIGHT", height });
const addWeight = (weight) => ({ type: "ADD_WEIGHT", weight });
const changeAddress = (apartment, home) => ({
  type: "ADD_ADDRESS",
  apartment,
  home,
});
const changeNumber = (axis, simpati) => ({
  type: "TELEPHONE_NUMBER",
  axis,
  simpati,
});
const Mentor = (mentor) => ({ type: "FAVORITE_MENTOR", mentor });

// create store
const store = createStore(reducer);
store.subscribe(() => {
  console.log(store.getState());
});

//dispatches

store.dispatch(chooseMentee("AJAY"));
store.dispatch(addPoint(88));
store.dispatch(addMentee("ajay"));
store.dispatch(addHoby("lagu galau"));
store.dispatch(addHoby("ditinggal calon pacar"));
store.dispatch(addHoby("deketin cewek"));
store.dispatch(removeHoby("deketin cewek"));
store.dispatch(currentFood("mie laknat"));
store.dispatch(currentColor("purple"));
store.dispatch(currentHeight("187cm"));
store.dispatch(addWeight(5));
store.dispatch(changeAddress("tidar", "malang"));
store.dispatch(changeNumber("123456", "0812121212"));
store.dispatch(Mentor("Yofan"));
