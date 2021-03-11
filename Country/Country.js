import React,{useState} from 'react';
import {NavLink} from 'react-router-dom'
import CountrySearch from './CountrySearch'
import {TextField} from '@material-ui/core'
const Country = () => {
  const [country,setCountry] = useState("")
  const inputChange=(event)=>{
    
    setCountry(event.target.value)
  }
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to='/' className="navbar-brand text-black">Country Search API</NavLink>
          <form className="d-flex">
            <TextField  value={country} onChange={inputChange} placeholder="Search Here" label="Search" variant="outlined" />
            
          </form>
        </div>
      </nav>
      
      <CountrySearch name={country} />
    </div>
  );
};

export default Country;