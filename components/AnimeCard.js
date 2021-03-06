import React from 'react'

function AnimeCard({anime}) {
    return (
        <article className="anime-card">
            <a 
                href={anime.url} 
                arget="_blank" 
                rel="noreferrer">
                <figure>
                 <img 
			src={anime.image_url} //loads anime image
                        alt="Anime Image" />
                </figure>
                <h3>{ anime.title }</h3>
            </a>
        </article>
    )
}
 
export default AnimeCard
