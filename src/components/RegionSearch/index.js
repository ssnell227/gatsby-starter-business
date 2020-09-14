import React, { useState, useEffect } from 'react'

import SearchIcon from '@material-ui/icons/Search';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';

import './styles.scss'

const RegionSearch = ({regionsList}) => {
    const [input, setInput] = useState('')
    const [included, setIncluded] = useState(false)

    const checkInput = (e) => {
        setInput(e.target.value)
    }

    useEffect(() => {
        console.log(regionsList[0].region.zipCode)
        console.log(Number(input))
        regionsList.includes(item => Number(item.region.zipCode) === Number(input)) ? setIncluded(true) : setIncluded(false)
        
    }, [input])

    return (
        <div>
            <div className='content'>
                <h2 className='title is-3 has-text-centered'>Enter your zipcode:</h2>
            </div>
            <div className="field box">
                <div className="control has-icons-left has-icons-right">
                    <input onChange={(e) => checkInput(e)} className={`input ${input && included ? 'is-success' : input && !included ? 'is-danger' : 'input'}`} type="text" placeholder="Text input" value={input} />
                    <span className="icon is-small is-left">
                        <SearchIcon />
                    </span>
                    {input && included ?
                        <span className="icon is-small is-right">
                            <CheckIcon/>
                        </span>
                        : input && !included ?
                        <span className="icon is-small is-right is-danger input-x">
                            <ClearIcon/>
                        </span>
                        : null
                    }
                </div>
                {input && included ?
                    <p className="help is-success">We serve your area!</p>
                    : input && !included ?
                    <p className="help is-danger">Contact us about services for your region.</p>
                    : null

                }
            </div>
        </div>
    )
}

export default RegionSearch