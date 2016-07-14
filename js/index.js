var React = require('react');
var ReactDOM = require('react-dom');

var Avatar = function(props) {
  return (
    <img className="person-img" src={props.imageUrl} />
  );
}

// var Person = function(props) {
//   // var name = 'Derek Zoolander';
//   var imageUrl = 'http://uifaces.com/assets/static/images/zoolander.jpg';
//   var job = 'Male model';
//   return (
//     <div className="person">
//       <div className="person-name">{props.name}</div>
//       <Avatar imageUrl={imageUrl}/>
//       <div className="person-job">
//         {job}
//       </div>
//     </div>
//   );
// };

class Person extends React.Component {
  constructor() {
    super();
    this.state = {
      imageUrl: "http://uifaces.com/assets/static/images/zoolander.jpg",
      job: "male model"
    }
  }

  changeName() {
    this.setState({
      job: "developer"
    });
  }

  render() {
    return (
      <div className="person" onClick={this.changeName.bind(this)} >
        <div className="person-name">{this.props.name}</div>
        <Avatar imageUrl={this.state.imageUrl}/>
        <div className="person-job">
          {this.state.job}
        </div>
      </div>
    );
  }
}


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(<Person name="derek zoolander"/>, document.getElementById('app'))
});
