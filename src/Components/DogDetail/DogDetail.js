import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './DogDetail.css'
class DogDetail extends Component {
    
    render() {
        let {dog} = this.props;
        return (
            <div className="container my-5">
              <div className="DogDetail row justify-content-center" >
                <div className="col-11 col-lg-5 ">
                  <div className="DogDetail-card card">
                    <img className="card-img-top" src={dog.src} alt={dog.name}/>
                    <div className="card-body text-left">
                      <h2 className="card-title ">{dog.name}</h2>
                      <h3 className="card-subtitle text-muted">{dog.age} years old </h3>
                    </div>
                    <ul className="list-group list-group-flush text-left">
                        {dog.facts.map((el, i) => {
                            return <li className="list-group-item" key={i}>
                                    <h5>{el}</h5>
                                    </li>
                        })}
                    <div className="card-body">
                        <Link to="/dogs/" className="btn btn-info">GO BACK</Link>
                    </div>       
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

export default DogDetail;