import React from 'react';
import ReactDOM from 'react-dom/client';
export default class Promo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            frame: false
        }
        this.showFrame = this.showFrame.bind(this)
        this.showAnime = this.showAnime.bind(this)
    }

    showFrame() {this.setState({frame: true})}
    showAnime(e) {
        const xhr = new XMLHttpRequest()
        xhr.onload = () => {
            if(xhr.status === 200 & xhr.readyState === 4) {
                let anime = JSON.parse(xhr.responseText)
                anime = anime['data']
                this.props.getAnime(anime)
            }
        }
        xhr.open("GET", "https://api.jikan.moe/v4/anime/"+ e)
        xhr.send()
    }
    render() {
        const prikazi = this.state.frame ? (
            <iframe className='PromoYoutube' width="560" height="315" src={this.props.krava.trailer.embed_url} title='this.props.krava.trailer.embed_url' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        ) : (
            <img className={"slika PromoPoster"} onClick={this.showFrame} src={this.props.krava.trailer.images.large_image_url} alt="nesto" />
        )
        const sifra = this.props.krava.entry.mal_id

        return(
            <div>
                
                <div className="nesto">
                
                <h3 className="naslov">{this.props.krava.entry.title}</h3>   
                <div className="TrailerContainer">{prikazi}</div>
                <button className="PromoBtn" onClick={()=> {this.showAnime(sifra)}}>showDetails</button>
            </div>
            </div>
            
      
        )
    }
}
