
import React from "react";
import "./puppies.css";
import puppies from "../../puppies.json";
import Pictures from "../pictures";


// If user click on img then rearrange image array log user score +1
// If user clicks on the same img again than deduct user score -1 and alert
// Also reshuffle


class puppies extends React.Component {
  state = {
      score: 0,
      choices: []
  };

  scoreHandler = (img) => {
    this.state.picks.img ? (
        this.setState({ score: 0, choices: [] })
    ) : (
            this.setState({
                score: (this.state.score + 1) 
               choices: (this.state.choices)
               
            })
            //this is where we are setting the state of the score and choices
        )
};
render() {
  return (

      <div>
          Where we would be rendering our HTML
              ))
              }
          </div>
      </div>
  );
}
}
export default Board;

};
