import React, { useState } from "react";
import {Table} from "react-bootstrap";
const MovieList = ()=> {
    const [movie, setMovie] = useState("");
    const [rating, setRating] = useState("");
    const [finalMovieList, setFinalList] = useState([]);
    
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        if(movie){
            setFinalList(finalMovieList.concat({'movie': movie, 'rating':rating}));
        }
        else {
            alert(`No movie provided.`)
        }
    }

    let finalMovieArr="";
    if(finalMovieList.length>0){
        finalMovieArr = [finalMovieList.map((obj,i)=>{
            return (
                <tr key={i}>
                    <td>{obj.movie}</td>
                    <td>{obj.rating}</td>
                </tr>
            )
        })]
    }else{
        finalMovieArr = [<tr key="0">
            <td colSpan="2">No Records</td>
        </tr>]
    }

    
return (

<div style={{textAlign:"center", padding:"10px 232px"}}>
    <form onSubmit={handleSubmit}>
    <h1 style={{textAlign:'center'}}>Movie List</h1>
        <div className="movieDiv">
            <span className="spanLayout">
                <label>Movie Name:</label> <input type="text" id="movieName" name="movieName" onChange={e => setMovie(e.target.value)} /> 
            </span>
            <span className="spanLayout">
                <label>Rating:</label> <input type="number" min="1" max="5" id="rating" name="rating" onChange={e => setRating(e.target.value)}/> 
            </span>
            <span className="spanLayout"><input type="submit" value="Submit" /></span>
        </div>
    </form>
    
    <div className="details-box" style={{position:'relative'}}>
        <div className="gridlist">
        <Table size="sm">
            <thead>
                <tr>
                    <th style={{width:'160px'}} >Movie</th>
                    <th style={{width:'160px'}} >Rating</th>
                </tr>
            </thead>
            <tbody>
                {finalMovieArr}
            </tbody>
        </Table>
    </div>
    </div>
</div>
    )
}

export default MovieList