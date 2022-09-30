import React from 'react'
import "./css/watchpage.css"
import { series } from './SeriesEps';

const WatchPage = (props) => {    

    let currentShow;
    let currentEpisode;
    let videoLink;

    const getEpisode = () =>{
        if (props.match.params.name){
            const showData = series.filter(show=>{
                return show.name === props.match.params.name
        })
            currentShow = showData
            if(props.match.params.num){
                const data = currentShow[0].episodes.filter(episode=>{
                    return currentShow[0].episodes.indexOf(episode) === (props.match.params.num - 1)
                })
                currentEpisode = data
                videoLink = currentEpisode[0]
                console.log(series[0].episodes.length)
            }
        }
    }



    return (
        <div className="show-card"> 
            {getEpisode()}
            <h1 className="watch-title">{currentShow[0].name === "7ob lel egar" ? "حب للايجار": currentShow[0].name}</h1>
            <h3 className="watch-episode">Episode {currentShow[0].episodes.indexOf(videoLink)+1}</h3>
            <video width="600" height="400" controls className="watch-video">
                <source src={videoLink} type="video/mp4" />
            </video>

            {currentShow[0].episodes.indexOf(videoLink) !== 0? <a href={`/${currentShow[0].name}/${currentShow[0].episodes.indexOf(videoLink)}`} ><button className="previous-episode">Previous Episode</button></a> : null}
            {currentShow[0].episodes.indexOf(videoLink)+1 !== currentShow[0].episodes.length? <a href={`/${currentShow[0].name}/${currentShow[0].episodes.indexOf(videoLink)+2}`}><button className="next-episode">Next Episode</button></a>: null}

        </div>
    )
}

export default WatchPage
