const initialState = {
  pickup: {
    address: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    company: "",
    details: "",
    addressBook: false,
    img: false,
  },
  dropoffs: [
    {
      address: "",
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      company: "",
      details: "",
      addressBook: false,
      orderId: "",
      orderInformation: "",
      img: true,
    },
  ],
  vehicle: 0,
  time: 0,
};

const deliveryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default deliveryReducer;
