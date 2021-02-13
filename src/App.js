import { Switch, Route } from "react-router-dom";
import { Members } from "./Members/Members";
import Company from "./Pages/Company";
import Customer from "./Pages/Customer";
import Links from "./Components/Links";
import Form from "./Components/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Links Members={Members} />
          </Route>
          <Route exact path="/register">
            <Form />
          </Route>
          <Route exact path="/customer/:id">
            <Customer Members={Members} />
          </Route>
          <Route exact path="/company/:id">
            <Company Members={Members} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
