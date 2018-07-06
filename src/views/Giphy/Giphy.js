import React, { Component } from 'react';
import { Button, Input, Grid} from '@material-ui/core'
import Gif from './Gif'
import "./assets/styles/style.css"

class Giphy extends Component {
    constructor(props){
        super(props)
        this.state = {
            words: ["Pennsylvania", "Texas", "New York", "Connecticut", "California", "Maryland", "North Carolina"],
            gifs: [],
            newWord: ''
        }
        this.selectWord = this.selectWord.bind(this)
        this.addWord = this.addWord.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    selectWord(word){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${word}&api_key=${process.env.REACT_APP_GIPHY}&limit=10`)
            .then(response => 
                response.json()) 
            .then( (json) => {
                var currentGifs = json.data
                this.setState(prevState => ({
                    gifs: currentGifs
                }))
            })           
    }   
    
    addWord(e){
        this.setState({
          newWord: e.target.value
        })
      }

    handleSubmit(e){
        e.preventDefault();
        this.setState(prevState => ({
            words: [...prevState.words, this.state.newWord],
            newWord: ''
        }))
    }
    
    render() {
        return (
            <div className="board-body">
                <Grid container={true}>
                    <Grid lg={10}>
                        {this.state.words.map((word) =>
                            <Button 
                                bsStyle="info"
                                key={word}
                                word={word}
                                onClick={this.selectWord.bind(this, word)}
                            >
                                {word}
                            </Button>
                        )}
                    </Grid>
                    <Grid md={2}>
                        <form>
                            <Input
                                id="formControlsText"
                                value={this.state.newWord}
                                onChange={this.addWord}
                                placeholder="new topic"
                            />
                            <Button type="submit" bsStyle="primary" bsSize="large" value="Submit" onClick={this.handleSubmit}>Submit </Button>
                        </form>
                    </Grid>
                </Grid>
                <Grid container={true} direction="row" style={{marginLeft: "2%"}} >
                    {this.state.gifs.map((gif) =>
                        <div>
                            <Grid lg={1} />
                                <Grid lg={5} spacing={32}>
                                    <Gif 
                                        key={gif.id}
                                        rating={gif.rating}
                                        moving={gif.images.original.url}
                                        still={gif.images.original_still.url} 
                                    /> 
                                </Grid>
                            <Grid lg={1} />
                        </div>
                    )}
                </Grid>
                
            </div>
        );
    }
}

export default Giphy;