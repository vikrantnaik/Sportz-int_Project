import "tachyons";
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import CardList from './componenets/CardList';

function App() {
  const [items, setitems] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const[search,setSearch]=useState("");
  // const[sort,setSort]=useState("");


  const fetchItems = async () => {
     const result = await axios(`https://api.npoint.io/20c1afef1661881ddc9c/playerList`)
     setitems(result.data)
     setIsloading(false)


  }
  useEffect(() => {
  fetchItems()
  }, [])

  const onChangeInput = (event) =>{
    setSearch(event.target.value)
}

// const sorted = items.sort((a , b) =>{return b.PFName -a.PFName})
// setSort(sorted)
// console.log(sorted)
// console.log(items)


  const FilteredItem = items.filter((itms =>{
    return itms.PFName.toLowerCase().includes(search.toLocaleLowerCase()) ||
           itms.TName.toLowerCase().includes(search.toLocaleLowerCase())
            
  }));





  return (
    <>
    <h1 className="head">Football Players</h1>
    <div className='search'>
            <input type='text' onChange={onChangeInput} placeholder='Search Player Here ' value={search}/><i class="fa-solid fa-magnifying-glass"></i>
          </div>  
    <CardList Items={FilteredItem} isLoading={isLoading} />
    </>
  );
}

export default App;


