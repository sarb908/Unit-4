export const reducer = (state = { count: 0 }, action) => {
  console.log(action);
  switch (action.type) {
    case "increment": {
      return {
        count: state.count + 1,
      };
    }
    case "decrement": {
      return {
        count: state.count - 1,
      };
    }
    case "add": {
      return {
        count: state.count + action.payload,
      };
    }
    case "substract": {
      return {
        count: state.count - action.payload,
      };
    }
    case "multiply": {
      return {
        count: state.count * action.payload,
      };
    }
    case "divide": {
      if (action.payload === 0) {
        alert("undefined");
        return state;
      }
      return {
        count: state.count / action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
