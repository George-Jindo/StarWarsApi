import React from 'react';
import logo from '../logo.png';

const Intro = () => {
    return (
        <div className='star-wars-intro'>
            <a href='./starwars-api' className='space-button'>
                Enter API Search
            </a>
            <p className='intro-text'>
                A Software Developer in the making, presents...
            </p>

            <h2 className='main-logo'>
                <img src={logo} alt=''></img>
            </h2>

            <div className='main-content'>
                <div className='title-content'>
                    <p className='content-header'>
                        STAR WARS API
                        <br />
                        Searchable Characters
                    </p>

                    <br></br>

                    <p className='content-body'>
                        After years of galactic silence, civilization is finally
                        on the brink of a new discovery. Star Wars Api. Now,
                        with the Force, you can search across the database, the
                        people of Earth gather in great numbers and search
                        through the SWAPI API without rest, for their favorite
                        character.
                    </p>

                    <br></br>

                    <p className='content-body'>
                        During the search, rebel spies attempted to shut down
                        the database from fear of being accessed by the people
                        of Earth. The people of Earth then returned home aboard
                        their starship, bringing good news to help their
                        civilization restore freedom in searching for their
                        favorite character in the galaxy...
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
