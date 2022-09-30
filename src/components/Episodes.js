import React, {useState, useEffect} from 'react'
import "./css/episodes.css"
import {Link} from 'react-router-dom'
import { series } from './SeriesEps'

const Episodes = (props) => {

    const [currentShow, setCurrentShow] = useState([])


    const getSeries = () =>{
        if (props.match.params.name){
            const data = series.filter(show=>{
                return show.name === props.match.params.name
        })
        setCurrentShow(data)
        }
    }

    useEffect(() => {
        
        /* eslint-disable-next-line*/ getSeries()
    }, [])

    return (
        <div className="cards">
            {currentShow.map(show=>{
                return show.episodes.map(episode =>{
                    return(
                        <div className="card" id={show.id}>
                            <Link to={`/${show.name}/${show.episodes.indexOf(episode)+1}`}><img src={show.image} alt="" /></Link>
                            <h1>{show.name}</h1>
                            <h3 className="eps-count">Episode {episode === "" ? "Not found" : show.episodes.indexOf(episode)+1 }</h3>
                            <Link to={`/${show.name}/${show.episodes.indexOf(episode)+1}`}><button className="watch-now">Watch Now</button></Link>
                        </div>
                    )
                })
            })
            }
        </div>
    )
}

export default Episodes
