import { useEffect, useState } from 'react';
import './App.css';
import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'

function App() {
  const [fishList, setFishList] = useState([])
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch("https://cors-anywhere.herokuapp.com/https://www.fishwatch.gov/api/species")
      response = await response.json()
      setFishList(response)
    }

    fetchMyAPI()
  }, [])
   
  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  } 

  const filteredFishes = fishList.filter(fish => {
    return fish['Species Name'].toLowerCase().includes(searchField.toLowerCase())
  })  

  if (!fishList.length) {
    return <h1 className='tc'>Loading...</h1>
    } else {
        return (
          <div className='tc'>
          <h1 className='f1'>Fishes</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <CardList fishList={filteredFishes}/>
          </Scroll>
          
        </div>
        )
    }

 
}

export default App;
