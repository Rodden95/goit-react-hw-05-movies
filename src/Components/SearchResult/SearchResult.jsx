
import { Link } from "react-router-dom";
export default function SearchResult({ data: { results } }) {
    
  return (
    <ul>{results && results.map(({ id, title }) =>
      // console.log(id, title)
      <li key={id}><Link to={`${id}`}>{title}</Link></li>
      )}
    </ul>
    
    
  )
}

// backdrop_path: "/1K7jIv3vy6dIXwo0CQNwokLeJc5.jpg"

// id: 414906

// original_title: "The Batman"
// overview: "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler."

// poster_path: "/3VFI3zbuNhXzx7dIbYdmvBLekyB.jpg"
// release_date: "2022-03-01"
// title: "The Batman"
