import React, { Component } from 'react';
import { base, app } from '../base'
import PlayerList from './PlayerList'
import Results from './Results'
import AddUser from './AddUser'
import Chat from './Chat'
import { Grid } from '@material-ui/core'


class Board extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            playerChoices: [],
            gameOver: false
        }
        this.addUserHandler = this.addUserHandler.bind(this)
        this.renderPlayersJoining = this.renderPlayersJoining.bind(this)
        this.renderOutcome = this.renderOutcome.bind(this)
        this.renderChat = this.renderChat.bind(this)
    }

    componentDidMount() {
        app.auth().signInAnonymously()
        app.auth().onAuthStateChanged(user => {
            user
                ? this.setState(() => ({ currentId: user.uid }))
                : this.setState(() => ({ currentId: null }));
        }).bind(this)
    }

    componentWillMount() {
        base.bindToState(`game/users/`, {
            context: this,
            state: 'users',
            asArray: true
        });
        base.syncState(`game/playerChoices/`, {
            context: this,
            state: 'playerChoices',
            asArray: true
        });
    }

    addUserHandler(newUserName, newUserId) {
        base.post(`game/users/${newUserId}`, {
            data: { name: `${newUserName}`, wins: 0, losses: 0, selectionMade: false, id: `${newUserId}` },
        });
    }

    renderChat() {
        if (this.state.users.length === 2) {
            return (
                <Chat users={this.state.users} />
            )
        }
    }

    renderOutcome() {
        if (this.state.playerChoices.length >= 2) {
            return (
                <Results playerChoices={this.state.playerChoices} />
            )
        }

    }

    renderPlayersJoining() {
        var foundPlayer = false;
        for (var i = 0; i < this.state.users.length; i++) {
            if (this.state.users[i].id === this.state.currentId) {
                foundPlayer = true;
                break;
            }
        }


        if ((this.state.users.length === 1) && (foundPlayer)) {
            return (
                <h1 className="game-messaging">Waiting For Player to join </h1>
            )
        } else if (this.state.users.length >= 2) {
            return (<div>
                <h1 className="game-messaging">Game In Progress</h1>
                <PlayerList users={this.state.users} />
            </div>)
        } else {
            return (
                <AddUser addUserHandler={this.addUserHandler} />
            )
        }
    }

    render() {
        return (
            <Grid container={true}>
                <Grid item={true} lg={12} s={12} md={12}>
                    <h1 className="game-messaging"> Rock Paper Scissors! </h1>
                </Grid>
                <Grid container={true}>
                    <Grid lg={6} s={12}>
                        {this.renderPlayersJoining()}
                    </Grid>
                    <Grid lg={6} s={12}>
                        <h1 className="game-messaging">Messages</h1>
                        {this.renderChat()}
                    </Grid>
                </Grid>
                <Grid item={true}>
                    <Grid lg={12} s={12} md={12}>
                        {this.renderOutcome()}
                    </Grid>
                </Grid>
            </Grid>
        );
    }
}


export default Board;
