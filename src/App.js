import { render } from "react-dom";
import { StrictMode } from "react";

import { SearchParams } from "./SearchParams";

/*
 * Nothing to tree shake in react package
 * In theory, only include code we use so better not to import everything
 */

/* App is parent component of Pet. Data flow is from parent to Pet
 *  Data does not flow from child to Parent
 *  Pet can't impact App, and helps in debugging that child component can't impact parent components.
 *  We can use context if data needs to be shared
 */

export const App = () => {
  return (
    <StrictMode>
      <div id="main-app">
        <h1>Adopt Me!</h1>
        <SearchParams />
      </div>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
