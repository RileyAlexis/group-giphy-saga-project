import react from "react";
import { useEffect, useState } from 'react';

function Search() {


    const [searchString, setSearchString] = useState();
    const [rating, setRating] = useState('PG');
    const [gifLimit, setGifLimit] = useState('25');

    const handleSubmit = () => {
        e.preventDefault()
        const dataObj = {
            searchString: searchString,
            rating: rating,
            gifLimit: gifLimit,
        }
        console.log(dataObj);
        axios.post('api/giphy/search', dataObj)
        .then((response) => {
            dispatch({type: 'SETGIFS', payload: response.data});
            history.push('/');
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
