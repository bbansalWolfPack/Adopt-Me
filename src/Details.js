import { useParams } from "react-router-dom";

export const Details = () => {
  const { id } = useParams();

  return <h2>{`Hello Dog with ID:` + id}</h2>;
};
