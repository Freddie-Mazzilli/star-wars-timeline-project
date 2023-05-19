import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import { Route, Switch, useHistory } from 'react-router-dom';
import SearchList from './components/SearchList';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import AddMedia from './components/AddMedia';
import NewMedia from './components/NewMedia';
import Focus from './components/Focus';
import Submit from './components/Submit';

function App() {

  const [medias, setMedias] = useState([])

  const [buttonState, setButtonState] = useState(false)

  const [searchText, setSearchText] = useState('')

  const [formData, setFormData] = useState({
    "id": 0,
    "title": "",
    "media_type": "",
    "poster": "",
    "summary": "",
    "sw_date": "",
    "release": ""
  })

  const [showSubmit, setShowSubmit] = useState(false)

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
    console.log(formData)
  }

  function addMedia(event){
    event.preventDefault()
    setShowSubmit(!showSubmit)

    fetch("http://localhost:3000/media", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newMedia => setMedias([...medias, newMedia]))
  }

  const filteredMedia = medias.filter(media => {
    if(searchText === ""){
      return true
    }
    return media.title.toUpperCase().includes(searchText.toUpperCase()) || media.media_type.toUpperCase().includes(searchText.toUpperCase()) || media.summary.toUpperCase().includes(searchText.toUpperCase())
  })

  function handleButtonState() {
      setButtonState(!buttonState)
  }

  useEffect(() => {
    fetch('http://localhost:3000/media')
    .then(res => res.json())
    .then(mediasData => setMedias(mediasData))
  },[])

  const [focusMediaUrl, setFocusMediaUrl] = useState('')

  const history = useHistory()

  function focusMediaSelector(event){
    setFocusMediaUrl(event.target.src)
    history.push('/focus')
  }

  const focusMedia = medias.filter(media => {
    return media.poster === focusMediaUrl
  })


  return (
    <main className='main'>
      <div className='nav'>
        <NavBar />
      </div>
      <div className='header'>
        <Header />
      </div>
      <Switch>
        <Route exact path="/">
          <div className='button-div'>
            <button onClick={handleButtonState} className="timeline-button">{buttonState ? "Chronological Order" : "Release Order"}</button>
          </div>
          <div className='grid'>
            <Timeline focusMediaSelector={focusMediaSelector} medias={medias} buttonState={buttonState}/>
          </div>
        </Route>
        <Route path="/search">
          <SearchBar setSearchText={setSearchText}/>
          <div className='grid2'>
            <SearchList focusMediaSelector={focusMediaSelector} medias={filteredMedia}/>
          </div>
        </Route>
        <Route path="/addmedia">
          <div className='flexbox1'>
            <AddMedia updateFormData={updateFormData} addMedia={addMedia}/>
          </div>
          <div className='flexbox2'>
            <NewMedia formData={formData}/>
          </div>
          <div className='flexbox4'>
            <Submit showSubmit={showSubmit}/>
          </div>
        </Route>
        <Route path="/focus">
          <Focus focusMedia={focusMedia[0]}/>
        </Route>
      </Switch>
    </main>
  );
}

export default App;
