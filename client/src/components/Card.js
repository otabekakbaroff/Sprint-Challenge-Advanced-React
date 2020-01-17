import React from "react";



class Card extends React.Component {
    render() {
        return (
            <div className="cardList">
                <h3>Name: {this.props.name}</h3>
                <p>Country:{this.props.country}</p>
                <p>searches:{this.props.searches}</p>
            </div>
        )
    }
}


export default Card;