import { useLocation } from "react-router-dom";

export default function Result() {
  const { state } = useLocation();

  return (
    <div>
      <h2>Result</h2>
      <h3>Your Score: {state.score} / {state.total}</h3>
    </div>
  );
}