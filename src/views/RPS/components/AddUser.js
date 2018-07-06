import React, { Component } from 'react';
import { app } from '../base'
import { Input, Button, Grid, Paper} from '@material-ui/core'


class AddUser extends Component {
    constructor(props){
        super(props)
            this.state = {
                currentID: null
        }
        this.addUser = this.addUser.bind(this)
    }
    componentDidMount(){
        app.auth().signInAnonymously()
        app.auth().onAuthStateChanged(user => {
          user
            ? this.setState(() => ({currentId: user.uid }))
            : this.setState(() => ({ currentId: null }));
        }).bind(this)
    }

    addUser(e){
        e.preventDefault()
        var name = this.input.value
        this.props.addUserHandler(name, this.state.currentId)   
        this.input.value = ''; 
    }
    render() {
        return (
            <Grid>
                <Grid>
                    <Grid lgOffset={1} smOffset={1} mdOffset={1} lg={10} sm={10} md={10}>
                        <Paper >
                                <Input type="text" placeholder="Enter Name" inputRef={ref => { this.input = ref; }}/>
                                <Button type="submit" bsStyle="primary" onClick={this.addUser.bind(this)}>Submit</Button>
                        </Paper>
                    </Grid> 
                </Grid>
            </Grid>
        );
    }
}

export default AddUser;