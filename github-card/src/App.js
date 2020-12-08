import React from 'react';
import UserCard from './components/UserCard';
import "./css/App.css"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      api_url: "https://api.github.com/users/rockyFierro",
      followers: "http://api.github.com/users/rockyFierro/followers",
      userdata: [],
      followers_data: []
    }
  }

  componentDidMount() {
    console.log("App: componentDidMount: fired.")
    fetch(this.state.api_url)
      .then(result => result.json())
      .then((data) => {
        this.setState({ userdata: data });
        return data;
      })
      .then((data) => {
        this.setState({ followers: data.followers_url });
        return data;
      })
      .catch(err => console.warn(err));

      fetch(this.state.followers)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            return data
          })
          .then(data =>
            this.setState({ followers_data: data })
          )
          .catch(err => console.warn(err))
  }
  componentDidUpdate() {
  
    console.log("App: componentDidUpdate: fired.")
  }
  render() {
    console.log("App: render():", this.state.userdata)
    return (
      <div className="main_body">
        <div className="title_card">
          <h1>Github API</h1>
          <p>A Lambda School project.</p>
        </div>
        <div className="purpose_card">
          <p>Use stateful class components to mount and render calls to github api and return information about a user and their followers.</p>
        </div>
        <UserCard
          name={this.state.userdata.name}
          bio={this.state.userdata.bio}
          location={this.state.userdata.location}
          followers={this.state.followers_data}
        />
      </div>
    )
  }
}

export default App;
