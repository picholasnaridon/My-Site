import React, { Component } from 'react';
import User from './User'


class PlayerList extends Component {
    
    render() {
        return (
            <div>
                {this.props.users.map(function(user){
                    return (
                        <User key={user.id}
                              name={user.name}
                              wins={user.wins}
                              losses={user.losses}
                              selectionMade={user.selectionMade}
                              id={user.id}/>
                    )
                })}
            </div>
        );
    }
}

export default PlayerList;