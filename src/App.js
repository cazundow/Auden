import React, {useEffect, useState} from 'react';
import './App.css';
import RepoTable from './RepoTable'; 
import SearchResults from './SearchResults'; 
import DetailsModal from './DetailsModal';

const App = () => {

  const [repo, setRepo] = useState([]); 
  const [search, setSearch] = useState('tetris');
  const [query, setQuery] = useState('tetris'); 
  const [recents, setRecents] = useState([]); 
  const [rated, setRated] = useState([]); 
  const [show, setShow] = useState(false);
  const [modalData, setModalData] = useState({}); 


  useEffect(() => {
    const getreposLists = async () => {
      // here we'll want to request the data we need and save them to state. we only need this to run once on load 
      const response = await fetch(`https://api.github.com/search/repositories?q=sort=updated&order=desc`); 
      const data = await response.json(); 
      setRecents(data.items);
      const ratedResponse =  await fetch(`https://api.github.com/search/repositories?q=sort=rated&order=desc`);
      const data2 =  await ratedResponse.json(); 
      setRated(data2.items)
    }
    getreposLists();
  }, [0]);

  //we need this to run each time the query state changes, this only happens when the form btnn is pressed. see onclick on the form btn 

  useEffect(() => {
    sendSearch();
    toggleBox();
  }, [query]);
  
  //the idea hear is to take the user input and try find a list of repos 
  const sendSearch = async () => {
    var label = document.getElementById("search-results-label");  
    const response = await fetch(`https://api.github.com/search/repositories?q=${query}+&sort=stars&order=asc`); 
    const data = await response.json();

    if(data.items.length >  0){
      setRepo(data.items);
      console.log(data.items)
    }else {
      const response2 =  await fetch(`https://api.github.com/users/${query}/repos`);
      const data2 =  await response2.json(); 
      console.log(data2);
      setRepo(data2)
    }
      
    
     
  }

  //captrure input field values and assign to search state
  const updateSearch = e => {
    setSearch(e.target.value)
  }

  // we don't want to make an api call each time someone enters a new char in our text field so we're saving those values to the search state and only search when the form button is pressed 
  // this will then copy the contents of search to query, which triggers use effects to go fetch data and update our view
  const getSearch = e =>{
    e.preventDefault(); 

    setQuery(search)
  }
  // flash a red border to incicate results have changed 
  const toggleBox = () => {
    var resultsBox = document.getElementById("search-results"); 
    resultsBox.classList.toggle("flash");
    setTimeout( () =>{ 
      resultsBox.classList.toggle("flash");
    }, 2000);
  };
  const handleClose = (e) => {
    setShow(false);
  }
  const handleShow = (e) => {
    setShow(true)
  };
const setModal = (e) => {
  console.log(e.target.className);
  //setModalData(repo.find(x => x.id == e.target.id));

 // setShow(true);
};
  return (
    <div className='App'>
      <form className='search-form'>
        <input className='search-bar' value= {search} onChange={updateSearch} type='text'/>
        <button className='search-button' onClick={getSearch} type='submit'><span> </span>Search</button>
      </form>
      <div className="container-fluid">
        <div className="row">
        <div className="col-sm-12" id="search-results">
            <h2 id="search-results-label">Search results</h2>
            <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Repo Name</th>
                <th scope="col">Forks</th>
                <th scope="col">Issues</th>

            </tr>
            </thead>
            <tbody>
            <SearchResults items={repo.slice(0, 10)} setShow={setShow} setModalData={setModalData} />
            </tbody>
        </table>
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>Top Rated</h2>
            <RepoTable items = {rated.slice(0, 10)} />
          </div>
          <div className="col-sm-12 col-md-6">
            <h2>Most Recent</h2>
            <RepoTable items = {recents.slice(0, 10)} />
          </div>
       </div>
      </div>
        
    <div>
      <DetailsModal modalData={modalData} show={show} handleClose={handleClose}/>
    </div>
      
    </div>
  )
}

export default App;
