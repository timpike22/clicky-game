import React from 'react';
import './AvatarCard.css';



const AvatarCard = props => (
    <div className="card-body">
            <div className="img-container">
                <button onClick={() => props.setSelected(props.id)}>
                <img id={props.id} alt={props.name} src={props.image} data-select={props.selected} />
                </button>
            </div>   
    </div>

);

export default AvatarCard;