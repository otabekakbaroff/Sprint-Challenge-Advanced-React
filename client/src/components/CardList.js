import React from 'react';
import axios from 'axios';
import Card from './Card';

class CardList extends React.Component {
  state={
    obj:[]
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        // res.data.message
        this.setState({
          obj: response.data
        });
      })
      .catch(err => console.log(err));
  }
  render(){
  return (
    <div className="CardList">
        {this.state.obj.map(person=>{
          return <Card 
          key={Math.floor(Math.random() * Math.floor(10000000000000))} 
          name={person.name}
          country={person.country}
          searches={person.searches}
          />
        })}
    </div>
  );
  }
}

export default CardList;
