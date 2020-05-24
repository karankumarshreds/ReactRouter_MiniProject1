import React,{Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import DogList from './Components/DogList/DogList';
import DodDetail from './Components/DogDetail/DogDetail';

import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import whiskey from './Images/whiskey.jpg';
import hazel from './Images/hazel.jpg';
import tubby from './Images/tubby.jpg'

import Navbar from './Components/Navbar/Navbar';
import DogDetail from './Components/DogDetail/DogDetail';

class App extends Component{
  static defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          'Whiskey is a curley haired pup.',
          'Whiskey loves to eat popcorn.',
          'It is terrible at guarding the house though.',
        ]
      },
      {
        name: "Hazel",
        age: 7,
        src: hazel,
        facts: [
          'Hazel loves people more than dogs.',
          'Probably the most intellegent dog.',
          'Very moody, only eats cookies.',
        ]
      },
      {
        name: "Tubby",
        age: 2,
        src: tubby,
        facts: [
          'Tubby is a very dumb puppy.',
          'Hibernates throughout the year.',
          'Absolutely loves to go on a walk.',
        ]
      },
    ]
  }
  render() {
    const getDog = (props) => {
      let dogName = props.match.params.name;
      let dogDetails = this.props.dogs.find((each) => {
        return each.name.toLowerCase() === dogName.toLowerCase()
      });
      return <DogDetail {...props} dog={dogDetails} />
    }
    return (
      <div className="App">
        <Navbar dogs={this.props.dogs}/>
        <Switch>
        <Route exact path="/dogs" render={() => <DogList dogs={this.props.dogs}/> }/>
        <Route exact path="/dogs/:name" render={getDog} />
        </Switch>
      </div>
    )
  }
}
  

export default App;
