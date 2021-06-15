import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';
import { useEffect, useState } from 'react';

const options = ['The Shawshank Redemption', 'Goodfellas'];
export default function ControllableStates() {

  const [posts, setPosts] = useState([]);
  const url = 'http://192.168.43.129:8000/api/'
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  const arreglo = posts.map((ele) => {
    return ele;
  });

  const titulos = posts.map((ele) => {
    return ele.title;
  });

  const propertyNames = Object.values(arreglo);

  let cruz = ''
  if (Array.isArray(propertyNames) && propertyNames.length) {
    cruz = propertyNames;
    console.log('Si:', cruz);
  }


  const [value, setValue] = useState(options[0]);
  const [inputValue, setInputValue] = useState('');

  /* const hello = arreglo.filter(mv => mv.title === options[0]).map((ele) => ele.year) */
  const [year, setYear] = useState('');
  const [title, setTitle] = useState('');
  const [tyears, setTyears] = useState([]);
  const [items, setItems] = useState([]);
  let hi = arreglo.filter(name => name.title === inputValue).map(filteredName => (filteredName))
  const [pname, setPname] = useState(hi);

  const addItem = () => {

    arreglo.filter(mv => mv.title === value).map((ele) => setYear(ele.year))
    /* console.log('hello:',hello) */
    setTyears([...tyears, { id: tyears.length, name: year }]);
    setItems([...items, { id: items.length, name: value }]);

    arreglo.filter(name => name.title === inputValue).map(ele => setTitle(ele.title))
    setPname([...pname, { id: pname.length, titulo: title, ano: year }]);
    console.log('Esto es year: ', year)
  };

  return (
    <>
      <div>
        <br />
        <Autocomplete
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={titulos}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Controllable" variant="outlined" />}
        />
      </div><button onClick={addItem}>Insertar</button><br />

    
       {pname.map(p => (<div key={p.id}>{p.titulo}--{p.ano}</div>))}

       {console.log('Esto es Value', inputValue)}


    </>
  );
}












