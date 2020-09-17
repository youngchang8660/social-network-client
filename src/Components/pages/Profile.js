import React from "react";

const Profile = () => {
  return (
    <div style={{maxWidth: '1550px', marginTop: '0px auto'}}>
        <div style={{display: 'flex', justifyContent: 'space-around', margin: '18px 0px', borderBottom: '1px solid grey'}}>
            <div>
                <img style={{width:'160px', height:'160px', borderRadius:'80px'}}
                src="https://images.unsplash.com/photo-1600252278397-5fe47c86d3aa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div>
                <h4>John Doe</h4>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <h6 style={{marginRight: '5px'}}>40 posts</h6>
                    <h6 style={{marginRight: '5px'}}>40 followers</h6>
                    <h6 style={{marginRight: '5px'}}>40 followings</h6>
                </div>
            </div>
        </div>
        <div className='gallery'>
            <img className='item' src='https://images.unsplash.com/photo-1600248384783-293685222ce4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
            <img className='item' src='https://images.unsplash.com/photo-1600257673689-fa683164e448?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
            <img className='item' src='https://images.unsplash.com/photo-1600189261762-905ef844cfc2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
            <img className='item' src='https://images.unsplash.com/photo-1600188879955-c4c84183e4ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
            <img className='item' src='https://images.unsplash.com/photo-1600251284360-7d5c50e2da1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' />
        </div>
    </div>
  );
};

export default Profile;