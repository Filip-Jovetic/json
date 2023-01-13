

import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './style/home.css'
import AnimeDetails from './components/AnimeDetails';
import Promo from './components/HomePage';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          isLoaded: false, 
          animeDetails: null, 
          content: []
      }
      this.getAnime = this.getAnime.bind(this)
      this.closeAnime = this.closeAnime.bind(this)
  }
  getAnime(e) {this.setState({animeDetails: e})}

  closeAnime() {this.setState({animeDetails: null})}
  componentDidMount() {
      const xhr = new XMLHttpRequest()
      xhr.onload = () => {
          if(xhr.status === 200 && xhr.readyState === 4) {
              let nesto = JSON.parse(xhr.responseText)
              this.setState({
                  content: nesto['data'],
                  isLoaded: true,
                  animeDetails: null
          })
          }
      }
      xhr.open("GET", "https://api.jikan.moe/v4/watch/promos/popular")
      xhr.send()
  }

  render(){
      let core =<div className="pozadina"><div id="main-container">
<div id="first-half"></div>
<div id="second-half"></div>
<h4 id="loading-text">loading</h4>
</div></div>  
      if(this.state.animeDetails != null) {
          core = <AnimeDetails anime={this.state.animeDetails} zatvori={this.closeAnime}/>
      }else if(this.state.isLoaded) {
          const pocetna = this.state.content.map(e =>  <Promo key={e.entry.mal_id} krava={e} getAnime={this.getAnime}/>)
          core = <div>
              <Header />
              <div className={"PromoGrid"}>{pocetna}</div> 
              </div>
          
      }
      return(
          <div className="AjaxApp">{core}</div>
      )
  }
}

export default App;
