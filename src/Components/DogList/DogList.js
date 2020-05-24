import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './DogList.css'
class DogList extends Component {
    
    render() {
        return (
            <div className="DogList" >
                <h1 className="heading display-3 text-center"> Choose your pup ❤️</h1>
                <div className="container">
                    <div className="row">
                        
                            {this.props.dogs.map(d=>(
                                <div className="Dog col-lg-4">
                                    <img src={d.src} alt={d.name} />
                                    <Link to={`/dogs/${d.name}`}><h1>{d.name}</h1></Link>
                                </div>
                            ))}
                        
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default DogList;