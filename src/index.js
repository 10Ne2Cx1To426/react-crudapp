import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import reducer from "./reducers";
import EventsIndex from "./components/events_index";
import EventsNew from "./components/events_new";
import EventsShow from "./components/events_show";

const enhancer =
  process.env.NODE_ENV === "developement"
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);
const store = createStore(reducer, enhancer);

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={EventsIndex} />
          <Route exact path="/events" component={EventsIndex} />
          <Route path="/events/new" component={EventsNew} />
          <Route path="/events/:id" component={EventsShow} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
