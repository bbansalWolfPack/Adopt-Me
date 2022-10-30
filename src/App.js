const Pet = (props) => {
  const { name, animal, breed } = props;

  return React.createElement("div", {}, [
    React.createElement("h1", {}, `${name}`),
    React.createElement("h2", {}, `${animal}`),
    React.createElement("h2", {}, `${breed}`),
  ]);
};

/* App is parent component of Pet. Data flow is from parent to Pet
 *  Data does not flow from child to Parent
 *  Pet can't impact App, and helps in debugging that child component can't impact parent components.
 *  We can use context if data needs to be shared
 */

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "Cat",
      breed: "Mix",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
