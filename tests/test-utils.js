import { render } from "@testing-library/react";

// providers for later use:
const Providers = ({ children }) => {
  // const fetcher = url => axios.get(url).then(res => res.data)
  // const [state, dispatch] = useReducer((state, action) => {
  //   switch(action.type) {
  //     case [GLOBAL_ACTIONS.UPDATE_QUOTES]:
  //       state.quotes = useSWR(`http://ron-swanson-quotes.herokuapp.com/v2/quotes/${action.payload}`, fetcher); // do something with the action
  //       return state;
  //     default:
  //       throw new Error(`Unknown type of Action: ${action.type}`);
  //   };
  // }, initialState);

  // return <Provider value={{ state, dispatch }}>{children}</Provider>;
  return children
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });
export * from "@testing-library/react";
export { customRender as render };