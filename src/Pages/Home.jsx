import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTrend } from "../services";

export default function Layout() {
  const [trend, setTrend] = useState(null);
  useEffect(() => {
    fetchTrend().then(({ results }) => setTrend(results))
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <ul>{trend && trend.map(({ title, original_name, id }) => <li key={id}>
        <Link to={`movies/${id}`}>{title ?? original_name}</Link> </li>)}
     
     
      </ul>
    </div>
  );
}