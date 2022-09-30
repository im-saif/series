import React, {useRef, useState} from 'react'
import "./css/allMeetups.css"
import { Link } from 'react-router-dom'
import { series } from './SeriesEps'


const AllMeetups = () => {

  const searchRef = useRef()

  const [filteredSeries, setfilteredSeries] = useState(series)
  const [showNothingFound, setShowNothingFound] = useState(false)
  
  const searchHandler = (e) =>{
    e.preventDefault()
    const enteredSearch = searchRef.current.value.trim()
    setShowNothingFound(false)
    if (!enteredSearch){return setfilteredSeries(series)}
    let filtered_series = series.filter(show=>{
      //return show.name.toLowerCase() === enteredSearch.toLowerCase()
      return show.name.toLowerCase().includes(enteredSearch.toLowerCase())
    })
    if (filtered_series.length === 0){
      setShowNothingFound(true)
    }
    setfilteredSeries(filtered_series)
  }

    return (
        <section>
          <h1 className="nothing-found">{showNothingFound? "No series found!": ""}</h1>
          <form onChange={searchHandler}>
                <input className="search-bar" type="text" ref={searchRef} placeholder="Search..."/><input onClick={searchHandler} className="submit-search" type="submit" value="Search"/>
            </form>
            <div className="cards">
              {filteredSeries.map(show=>{
                return (
                  <div className="card" id={show.id}>
                    <Link to={`/${show.name}`}><img src={show.image} alt="" title={show.name}/></Link>
                    <h1>{show.name}</h1>
                    <h4>{show.episodes.length} Episodes</h4>
                    <Link to={`/${show.name}`}><button className="watch-now">Watch Now</button></Link>
                  </div>
                )
              })}
            </div>
        </section>
    )
}

export default AllMeetups
