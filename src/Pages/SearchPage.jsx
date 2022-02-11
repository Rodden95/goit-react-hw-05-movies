import SearchForm from '../Components/SearchForm';
import SearchResult from '../Components/SearchResult';
import { fetchKeyWord } from '../services';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'



export default function SearchPage() {

  const [searchState, setSearchState] = useState(null);
  const [searchItem, setSearchItem] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search).get('search');
  
  useEffect(() => {
    searchParams && fetchKeyWord(searchParams).then(setSearchItem);
   
  }, [searchParams]);

  const elements = () => {
    if (searchState?.length < 1 || !searchItem) {
      return <h2>Search something :D</h2>
    } else if (searchItem?.total_results === 0) {
      return <h2>Bad request</h2>
    } else if (searchItem) {
      return <SearchResult data={searchItem} />
    }
  }
  
  const inputValueHandler = data => {
    navigate({ ...location, search: `search=${data.target.value}` })
    // navigate('/home')
    console.log(location);
    
    return setSearchState(data.target.value)
  }


  return (
    <div>
      
      <div><SearchForm inputData={inputValueHandler} /></div>
      <div>
        {(elements)()}
        </div>
    </div>
  );
}