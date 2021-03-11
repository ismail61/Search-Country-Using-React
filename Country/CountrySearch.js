import React from 'react';
import countryList from './countries.json'
import CountryCard from './CountryCard'
const CountrySearch = (props) => {

    const filterCountry=countryList.filter((country)=>{
        return (
            country.name.toLowerCase().indexOf(props.name.toLowerCase()) !== -1
        )
    })
        
    return (
        <div>
            <div className="row">
                {filterCountry.map((country)=>{
                    return <CountryCard country={country} />
                })}
            </div>
        </div>
    );
};

export default CountrySearch;