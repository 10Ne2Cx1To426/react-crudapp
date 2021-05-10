import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import thunk from "redux-thunk";

import reducer from "./reducers";
import EventsIndex from "./components/events_index";
import events_new from "./components/events_new";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={EventsIndex} />
        <Route exact path="/events/new" component={events_new} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
