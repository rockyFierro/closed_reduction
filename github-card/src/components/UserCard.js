import React from 'react';
import '../css/UserCard.module.css';

const UserCard = (props) => {
    return (
        <div className="usercard">
            <div className="userinfo">
                <h2>{props.name}</h2>
                <p className="bio">"{props.bio}"</p>
                <p className="location">based in: {props.location}</p>
            </div>
            <div className="followersinfo">
                <h3>Followers</h3>
                {props.followers.map(
                    (user) => {
                        return (

                            <div key={user.id}>
                                <h4>{user.login}:</h4><span>{user.html_url}</span>
                            </div>

                        )
                    }
                )}
            </div>
        </div>
    )
}

export default UserCard;