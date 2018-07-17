import React, { Component } from 'react';
import { base, app, } from '../base.js'
import { Grid, Avatar } from '@material-ui/core'
import '../assets/styles/App.css';


class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentId: null,
        }
        this.componentCleanup = this.componentCleanup.bind(this)
        this.renderUser = this.renderUser.bind(this)
        this.handleSelection = this.handleSelection.bind(this)
    }

    componentDidMount() {
        app.auth().signInAnonymously()
        app.auth().onAuthStateChanged(user => {
            user
                ? this.setState(() => ({ currentId: user.uid }))
                : this.setState(() => ({ currentId: null }));
        }).bind(this)
        window.addEventListener('beforeunload', this.componentCleanup)
    }
    componentCleanup() {
        base.remove(`/game/users/`)

    }
    componentWillUnmount() {
        base.remove(`/game/users/`)
        window.removeEventListener('beforeunload', this.componentCleanup); // remove the event handler for normal unmounting
    }

    handleSelection(selection) {
        console.log(selection)
        base.update(`game/users/${this.state.currentId}`, {
            data: { selectionMade: true },
        });
        base.push('game/playerChoices', {
            data: { name: this.props.name, id: this.props.id, selection: selection, currentWins: this.props.wins, currentLosses: this.props.losses },
        });
    }

    renderUser() {
        if ((this.state.currentId === this.props.id) && (!this.props.selectionMade)) {
            return (
                <div className="currentPlayer">
                    <h3>Enter your selection</h3>
                    <Grid container={true} direction="row" justify="space-around" >
                        <Grid item={true}  >
                            <Avatar onClick={() => this.handleSelection("r")} alt="Rock" src={require('../assets/images/rock.png')} />
                        </Grid>
                        <Grid item={true} >
                            <Avatar onClick={() => this.handleSelection("p")} alt="Paper" src={require('../assets/images/paper.png')} />
                        </Grid>
                        <Grid item={true} >
                            <Avatar onClick={() => this.handleSelection("s")} alt="Scissors" src={require('../assets/images/scissors.png')} />
                        </Grid>
                    </Grid>
                    <div>
                        <div>Wins: {this.props.wins}</div>
                        <div>losses: {this.props.losses}</div>
                    </div>
                </div>
            )
        } else if (this.state.currentId === this.props.id) {
            return (
                <div className="currentPlayer">
                    <h3> Waiting for Opponent to pick </h3>
                    <div>
                        <div>Wins: {this.props.wins}</div>
                        <div>losses: {this.props.losses}</div>
                    </div>
                </div>
            )
        }
    }
    renderOponent() {
        if ((this.state.currentId !== this.props.id) && (!this.props.selectionMade)) {
            return (
                <div className="currentOpponent">
                    <h1>Opponent {this.props.name}</h1>
                    <div>
                        <h3>Status: Currently choosing </h3>
                        <div>
                            <div>Wins: {this.props.wins}</div>
                            <div>losses: {this.props.losses}</div>
                        </div>
                    </div>
                </div>
            )
        } else if (this.state.currentId !== this.props.id) {
            return (
                <div className="currentOpponent">
                    <h1>Opponent {this.props.name}</h1>
                    <div>
                        <h3>Status: Waiting for you to choose. </h3>
                        <div>
                            <div>Wins: {this.props.wins}</div>
                            <div>losses: {this.props.losses}</div>
                        </div>
                    </div>
                </div>
            )
        }
    }



    render() {
        return (
            <div>
                {this.renderUser()}
                {this.renderOponent()}
            </div>
        );
    }
}

export default User;
