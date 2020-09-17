import React from "react";

const Home = () => {
  return (
    <div className='home'>
        <div className='card home-card'>
            <h5>John</h5>
            <div className='card-image'>
                <img src='https://images.unsplash.com/photo-1600262210419-02372bcbded4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
            </div>
            <div className='card-content'>
                <i className="material-icons" style={{color: 'red'}}>favorite</i>
                <h6>title</h6>
                <p>this is amazing post</p>
                <input type='text' placeholder='add a comment' />

            </div>
        </div>
        <div className='card home-card'>
            <h5>John</h5>
            <div className='card-image'>
                <img src='https://images.unsplash.com/photo-1600207341959-534c3387b5e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
            </div>
            <div className='card-content'>
                <h6>title</h6>
                <p>this is amazing post</p>
                <input type='text' placeholder='add a comment' />

            </div>
        </div>
        <div className='card home-card'>
            <h5>John</h5>
            <div className='card-image'>
                <img src='https://images.unsplash.com/photo-1600209141818-f0447678f031?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
            </div>
            <div className='card-content'>
                <h6>title</h6>
                <p>this is amazing post</p>
                <input type='text' placeholder='add a comment' />

            </div>
        </div>
    </div>
  );
};

export default Home;