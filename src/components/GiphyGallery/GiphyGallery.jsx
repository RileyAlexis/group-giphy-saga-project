import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";

function GiphyGallery() {

    const giphyArr = useSelector(store => store.giphyArr);
    const history = useHistory();
    const dispatch = useDispatch();

const setFavorite = (obj) => {
    dispatch({type: 'ADD_FAVORITE', payload: obj});
    console.log('Giph added to favorites');
}

console.log('Giphy array inside the component', giphyArr);

    return (
        <>
        
            {giphyArr?.map((obj) => (
               
                    <img src={obj.images.fixed_height.url} alt={`Giphy ${obj.id}`} />
              
            ))}
        </>
    );
}


// {theGifs.map((gif) => {
//     return <img key={gif.id} src={gif.images.fixed_height.url} alt={gif.title}/>
//   })}

export default GiphyGallery;