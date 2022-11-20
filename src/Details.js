import { Component } from "react";
import { useParams } from "react-router-dom";

import Carousel from "./Carousel";
// showing an example of class based component. But mostly we use functional components

class Details extends Component {
  state = { loading: true };

  // componentDidMount is similar to [useEffect(() => {}, [])]
  async componentDidMount() {
    try {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?id=${this.props.id}`
      );
      const json = await res.json();
      this.setState({ loading: false, ...json.pets[0] });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    if (this.state.loading) {
      return <h2>loading … </h2>;
    }

    const { animal, breed, city, state, description, name, images } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />;
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const { id } = useParams();
  return <Details id={id} />;
};

export default WrappedDetails;
