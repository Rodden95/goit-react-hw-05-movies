import { Link } from "react-router-dom"
export default function SearchForm({ inputData }) {
  
  return (
    <form >
      <label >
        <input type="text" name="searchFieldForm" onChange={inputData}/>
      </label>
    </form>
  )
}