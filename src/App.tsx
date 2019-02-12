import * as React from "react";
import { Provider } from "react-redux";
import "./App.css";
import Header from "./components/Header/Header";
import Images from "./components/Images/images";
import rootstore from "./Store/store";

class App extends React.Component {
  public render() {
    return (
      <Provider store={rootstore}>
        <div>
          <Header />
          <Images />
        </div>
      </Provider>
    );
  }
}

export default App;

// const reducer = (state: IReduxDemo, action: IAction): IReduxDemo => {
//   if (action.type === "attack") {
//     return action.payload;
//   }
//   if (action.type === "piece") {
//     return action.payload;
//   }
//   return state;
// };
// const store = createStore(reducer, this.state.mode as any);

// store.subscribe(() => {
//   // tslint:disable-next-line: no-console
//   console.log("store is now", store.getState());
// });

// store.dispatch({
//   payload: "hehe",
//   type: "attack"
// });
// store.dispatch({
//   payload: "haha",
//   type: "piece"
// });
