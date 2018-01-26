import React, { Component } from 'react';
import Avatars from '../../Avatars.json'
import shuffle from 'shuffle-array';
import './AvatarCard.css';
//import ImageCard from '../ImageCard';


class AvatarCard extends Component {
    state = {
        matchArr: [],
        arrAvatar: [],
        topScore: 0,
        counter: 0,
        selected: false
    };

    initialClick = (id) => {
        let initialCheck = 0;
        for (let i = 0; i < this.state.matchArr.length; i++) {
                if(this.state.matchArr[i] === id) {

                if (this.state.counter > this.state.topScore) {
                this.setState({
                    topScore: this.state.counter
                })
                };
                this.setState({
                counter: 0,
                matchArr: [],
                })
                initialCheck =+ 1;
                console.log('new counter: ' + this.state.counter)
                }
            
        };
        if (initialCheck === 0) {
            this.setState({
                counter: this.state.counter + 1,
                selected: true
            }, 
            function() {
                this.state.matchArr.push(id);
            }
            );
        }
    }
        handleClick = (id, ) => {
            const matchArr = this.state.matchArr
            console.log('id ' + id);
            console.log(this.state);
            this.initialClick(id)
        };

        componentWillMount = () => {
            const arrAvatar = this.state.arrAvatar;
            Avatars.map((Avatar) => {
                arrAvatar.push({
                    id: Avatar.id,
                    image: Avatar.image,
                    selected: true
                });
            });
        };

        shouldComponentUpdate = () => {
           shuffle(this.state.arrAvatar);
            return true;
        };



        render() {
            return (
                <div id="avatarCards">
                    <div className='container'>
                        <div className="row justify-content-between">
                            <div className="col">
                        <h4>
                            Counter: {this.state.counter}
                        </h4>
                        </div>
                        <div className="col">
                        <h4>   
                            Top Score: {this.state.topScore}
                        </h4>
                        </div>
                        </div>
                    </div>        
                            <div className="container">
                                <div className='row'> 
                                    {this.state.arrAvatar.map((Avatar) => {
                                        return (

                                        <div className='image-div' id={Avatar.id} key={Avatar.id}>
                                            <img
                                                className="images"
                                                onClick={() => this.handleClick(Avatar.id)}
                                                id={Avatar.id}
                                                key={Avatar.id}
                                                src={Avatar.image}
                                            />
                                        </div> 
                                        );
                                    })}
                                      
                                    
                                </div>
                            </div>
                        
                    </div>
                
                )
            };
            
}


export default AvatarCard;

/*<div className='image-div' id={Avatar.id} key={Avatar.id}>
    <img
        className="images"
        onClick={() => this.handleClick(Avatar.id)}
        id={Avatar.id}
        key={Avatar.id}
        src={Avatar.image}
    />
</div>*/

