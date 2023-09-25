import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function GiphyGallery() {

    const giphyArr = useSelector(store => store.giphyArr);
    const history = useHistory();
    const dispatch = useDispatch();

const setFavorite = (obj) => {
    dispatch({type: 'ADD_FAVORITE', payload: obj});
    console.log('Giph added to favorites');
}


    return (
        <>
        {giphyArr?.map((obj => {
            <a href={() => setFavorite(obj)}>
            <img key={obj.id} src={obj.url} />
            </a>
        }))}
        
        </>
    )
}

export default GiphyGallery;