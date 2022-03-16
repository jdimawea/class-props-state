// import dependencies
import React, {Component} from 'react';

// initiate the class hierarchy
class TVShow extends Component {
    render(){
        const {title, episodes, hashtags} = this.props // deconstruction
        return(
            <div>
                <h1>TV Show Components</h1>
                <h3>Title: {title}</h3>
                <h3>Total Episodes: {episodes} </h3>
                <ul>
                    {
                        hashtags.map((hashtag, i) => { // basically a for loop
                            return (
                                <li key={i}>#{hashtag}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

// export the class 
export default TVShow