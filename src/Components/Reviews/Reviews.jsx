import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from '../../services';

export default function Reviews() {
  const { id } = useParams();
  const [ reviews, setReviews ] = useState(null);
  useEffect(() => {
    fetchReviews(id).then(({ results }) => setReviews(results))
  }, [id])
  
  return <ul>
    {reviews && reviews.length > 1 ? reviews.map(({ author, content, id }) => <li key={id}><h3>{author}</h3><span>{ content}</span></li>) : 'no reviews'}
  </ul>
};