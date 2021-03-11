import React from 'react';
import blankImg from "./blank.gif";
import "./style.css";
import "./flags.min.css";
import {Tooltip} from '@material-ui/core'

const CountryCard = (props) => {
    var code = props.country.code.toLowerCase();
    var classCode = `flag flag-${code} mx-auto d-block rounded img-fluid`
    return (
        <div className="col-md-3">     
            <div className="card p-2 my-2">
                <img src={blankImg} className={classCode} alt={props.country.name}/>
                <div className="card-body">    
                    <Tooltip title={props.country.name}>
                        <h5 className="card-title text-center">
                            {props.country.name.substring(0, 15)}
                            {props.country.name.length > 15 ? "..." : null}
                        </h5>
                    </Tooltip>                              
                </div>
            </div>
        </div>
    )
}

export default CountryCard;