import { render } from "react-dom";
import { StrictMode, useState } from "react";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { SearchParams } from "./SearchParams";
import WrappedDetails from "./Details";
import ThemeContext from "./ThemeContext";

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
  // using context to avoid prop drilling
  // context is better than redux, redux is good but context has everything and better what redux offers

  const theme = useState("darkblue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>

          <Routes>
            <Route path="/details/:id" element={<WrappedDetails />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
