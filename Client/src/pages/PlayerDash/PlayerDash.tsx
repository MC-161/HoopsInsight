import { useLocation } from "react-router-dom";

const PlayerDash = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const playerId = queryParams.get('id');

  return (
    <div>{playerId}</div>
  );
}

export default PlayerDash;
