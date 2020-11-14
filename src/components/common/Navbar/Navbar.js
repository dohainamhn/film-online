import React, { useRef } from 'react'
import logo from '../../../img/logo.png'
import './Navbar.css'

function Navbar() {
    const menuBarRef = useRef()
    const genresRef = useRef()
    const countryRef = useRef()
    const WatchList = useRef()
    const toggleMenu = () => {
        menuBarRef.current.classList.toggle('a')
    }
    const showDropdown = (x, e) => {
        if (x === 'genres') {
            genresRef.current.classList.toggle('d-block')
            console.log(e.target);
            e.target.classList.toggle('color')
        }
        if (x === 'country') {
            countryRef.current.classList.toggle('d-block')
            e.target.classList.toggle('color')
        }
    }
    const showWatchList = () => {
        WatchList.current.classList.toggle('show-watchList')
    }
    return (
        <div className="container">
            <div className="navbar">
                <div className="navbar-logo">
                    <img src={logo} />
                </div>
                <div className="navbar-right-top">
                    <div className="navbar-searchBar">
                        <form>
                            <select id="search-option" name="selected">
                                <option value="name">Name</option>
                                <option value="author">author</option>

                                <option value="actor">actor</option>
                            </select>
                            <input type="text" placeholder="Search" />
                            <div className="navbar-button-search">
                                <button>
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div ref={menuBarRef} className="navbar-right-bottom">
                    <div className="navbar-menu">
                        <div className="close-menu-button" >
                            <i onClick={toggleMenu} className="far fa-window-close"></i>
                        </div>
                        <ul>
                            <li>
                                <span>Home</span>
                            </li>
                            <li className="drop-down">
                                <span onClick={(e) => showDropdown('genres', e)}>Genres <i className="fas fa-sort-down noClick"></i></span>
                                <ul ref={genresRef}>
                                    <li>Action</li>
                                    <li>Action</li>
                                    <li>Action</li>
                                    <li>Action</li>
                                    <li>Action</li>
                                </ul>
                            </li>
                            <li className="drop-down">
                                <span onClick={(e) => showDropdown('country', e)}  >Country <i className="fas fa-sort-down noClick"></i></span>
                                <ul ref={countryRef}>
                                    <li>VietNam</li>
                                    <li>china</li>
                                    <li>US</li>
                                    <li>VietNam</li>
                                    <li>china</li>
                                    <li>US</li>
                                </ul>
                            </li>
                            <li>
                                <span>Home</span>
                            </li>
                            <li>
                                <span>Top Movies</span>
                            </li>
                            <li className="navbar-watchList">
                                <button onClick={showWatchList}>Watch List <i className="far fa-clock"></i> </button>
                                <ul ref={WatchList}>
                                    <li className="close-watchList-button">
                                        <i style={{
                                            fontSize: "25px"
                                        }} onClick={showWatchList} className="far fa-window-close"></i>
                                    </li>
                                    <li>
                                        <img src="http://image.phimmoizz.net/film/7294/poster.medium.jpg" />
                                        <div className="navbar-watchList-content">
                                            <p style={{
                                                color: '#77efea'
                                            }}>Dai Hai Ngu</p>
                                            <p style={{
                                                fontSize: '12px'
                                            }}>Sea big</p>
                                            <p style={{
                                                fontSize: '12px',
                                                color: '#77efea'
                                            }}> Trang Thai: completed</p>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="http://image.phimmoizz.net/film/7294/poster.medium.jpg" />
                                        <div className="navbar-watchList-content">
                                            <p style={{
                                                color: '#77efea'
                                            }}>Dai Hai Ngu</p>
                                            <p style={{
                                                fontSize: '12px'
                                            }}>Sea big</p>
                                            <p style={{
                                                fontSize: '12px',
                                                color: '#77efea'
                                            }}> Trang Thai: completed</p>
                                        </div>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="toggle-menu">
                    <div className="wrap-toggle-menu">
                        <i onClick={toggleMenu} className="fas fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
