import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './custom.css';

export default function DataFetch() {
    const [movies, setMovies] = useState([])
    const [text, setText] = useState('')
    const [suggestions, setSuggestions] = useState([]);
    const url = 'http://192.168.43.229:8000/api/'
    useEffect(() => {
        const loadMovies = async () => {
            const response = await axios.get(url);
            console.log(response.data)
            setMovies(response.data)
        }
         loadMovies();
    }, [])
    
    console.log("Películas: ",movies)
    
   

    const onSuggestHandler = (text) =>{
        setText(text);
        setSuggestions([]);
    }
    const onChangeHandler = (text) =>{
        let matches = []
        if(text.length > 0){
            matches = movies.filter(user=>{
                const regex = new RegExp(`${text}`,"gi");
                return user.title.match(regex)
            })
        }
        console.log('matches: ', matches)
        setSuggestions(matches)
        setText(text)
    }

    const [items, setItems] = useState([])
    

    const handleClick = () => {
       
        console.log("El valor del input: ",text);
        let ano = movies.filter(mv => mv.title === text).map(mv => (mv.year))
        console.log("Año pelicula: ", ano)
        setItems(prev => [...prev, { id: prev.length, titulo: text, year: ano }]);
        setText("");
    };
    return (
        <div>
            <h2>Esta Va Ser el Auto Complete</h2>
                <div className="container">
                    <input type="text" className="col-md-12" style={{marginTop:10}}
                        onChange={e => onChangeHandler(e.target.value)}
                        value={text}
                        onBlur={()=>{
                            setTimeout(()=>{
                                setSuggestions([])
                            },100);
                        }}
                    />
                    {suggestions && suggestions.map((suggestion,i)=>
                      <div key={i} className="suggestion col-md-12 justify-content-md-center"
                           onClick={()=>onSuggestHandler(suggestion.title)}
                      >
                          {suggestion.title}
                      </div>
                    )}
                </div>
            <br/>
            <button onClick={handleClick} >Insertar</button>
            <div>
                {items.map(ite =>
                    <div key={ite.id}>{ite.titulo}--{ite.year}</div>
                )}
            </div>
           
        </div>
    )
}