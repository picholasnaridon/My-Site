import React, { Component } from 'react';
import { base } from '../base'
import { Paper, Button, Grid, Input }  from '@material-ui/core'

class Chat extends Component {
    constructor(props){
        super(props)
        this.state = {
            messages: []
        }
    }
    componentWillMount(){
        base.syncState(`game/messages`, {
            context: this,
            state: 'messages',
            asArray: true
        });
    }
    componentWillUnmount(){
        base.remove('game/messages', function(){
            console.log("removed")
          });
    }

    addMessage(e){
        e.preventDefault()
        var message = this.input.value 
        base.push('game/messages', {
            data: {message: message}
        });
        this.input.value = ''
    }
    
    render() {
        return (
            <Grid container={true}>
                <Grid lg={12} sm={12} md={12}>
                    <Paper>
                        {this.state.messages.map(function(message){
                            return (<p key={message.key}>{message.message}</p>)
                        })}
                    </Paper>
                </Grid>
                <Grid lg={12} sm={12} md={12}>
                    <Paper>
                            <Input type="text" placeholder="Enter Message" inputRef={ref => { this.input = ref; }}/>
                            <Button type="submit" bsStyle="primary" onClick={this.addMessage.bind(this)}>Submit</Button>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Chat;