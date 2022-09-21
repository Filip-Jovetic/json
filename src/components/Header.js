import React from 'react';
import ReactDOM from 'react-dom/client';
export default class Header extends React.Component {

    render() {
        return(
           <header className="Hero">
                <nav>
                    <div><h2>Anime <span className="logo">Wiki</span></h2></div>

                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">See All</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>

                    <button className="dugme" type="button">GitHub</button>
                </nav>
            </header>
        )
    }
}