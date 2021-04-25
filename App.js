import { useState, useEffect } from 'react'; //converting class components to functional components
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

function App() {
	const [animeList, SetAnimeList] = useState([]); //hold anime when searching
	const [topAnime, setTopAnime] = useState([]); //hold top anime
	const [search, SetSearch] = useState(""); //search we get from searchbar

	const GetTopAnime = async () => {
		const temp = await fetch('https://api.jikan.moe/v3/top/anime/1/bypopularity')
			.then(res => res.json()); //store json data inside temp, returns 50 different anime

		setTopAnime(temp.top.slice(0, 5)); //only want to get 5 of the top anime

	}

	const HandleSearch = e => {
		e.preventDefault(); //stop from refreshing the page

		FetchAnime(search);
		
	}

	const FetchAnime = async (query) => {
		const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=10`)
				.then(res => res.json());

			//console.log(temp.results); //for testing
			SetAnimeList(temp.results);

	} 

	useEffect(() => {
			GetTopAnime(); 

			console.log("Top Anime");
	}, []);

	console.log(topAnime);

		return (
			<div className="App">
				<Header />
				<div className="content-wrap"> 
						<Sidebar 
								topAnime={topAnime} />
						<MainContent 
							HandleSearch={HandleSearch}
							search={search}
							SetSearch={SetSearch}
							animeList={animeList} />
				</div>
			</div>
	);
}

export default App 


