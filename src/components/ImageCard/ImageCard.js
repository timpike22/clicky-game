import React from 'react';
//import Avatars from '../../Avatars.json'

const ImageCard = props => {
    return (
    <div className="card">
        <div className="card-body">
            <div className="card-img image-div" id={props.id} key={props.id}> 
                    <img className="images" id={props.id} key={props.id} src={props.image} onClick={() => this.handleClick(props.id)}  />     
            </div>
        </div>
    </div>
    );
}

export default ImageCard;