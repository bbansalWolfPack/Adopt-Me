import { createContext } from "react";

// ["#f06d06"], () => {} is the default value
const ThemeContext = createContext(["#f06d06", () => {}]);

export default ThemeContext;
