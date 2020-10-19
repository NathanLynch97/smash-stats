import React from 'react';

const HomePage = (props) => {
    return (
        <div>
            {props.user ? 
                <h1>Welcome, {props.user.name}</h1> 
                :
                <h1>Log In or Sign Up Above!</h1>
            }
            <img src="https://i.gadgets360cdn.com/large/super_smash_bros_ultimate_nintendo_switch_cover_1534157121839.jpg" alt=""/>
        </div>
    )
}

export default HomePage;