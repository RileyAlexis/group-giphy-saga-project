import react from "react";
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import axios from 'axios';

function Search() {

    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState();
    const [rating, setRating] = useState('PG');
    const [gifLimit, setGifLimit] = useState('25');

    const handleSubmit = (e) => {
        e.preventDefault()
        
        const dataObj = {
            searchString: searchString,
            rating: rating,
            gifLimit: gifLimit,
        }
        console.log('DataObj sending to server', dataObj);
        axios.post('/api/giphy/search', dataObj)
        .then((response) => {
            dispatch({type: 'SETGIFS', payload: response.data.data});
            console.log(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        })

}

return (
    <div>
<form className='' onSubmit={handleSubmit}>

    <input type="text" 
    value={searchString}
    onChange={(e) => setSearchString(e.target.value)}
    
    />
    <button type='submit'>Submit</button>

    </form>



    </div>
);
}

export default Search;
