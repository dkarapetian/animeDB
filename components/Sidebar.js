import React from 'react'

function Sidebar({ topAnime }) { //HTML5 - creating sidebar for Top Anime
    return (
        <aside>
            <nav>
                <h3>Top Anime</h3>
                {topAnime.map(anime => (
                    <a 
                        href={anime.url} 
                        target="_blank"
                        key={anime.mal_id}
                        rel="norefferer">
                        { anime.title }
                </a>
                ))}
                </nav> 
        </aside>
    )
}

export default Sidebar
