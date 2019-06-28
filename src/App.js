import React from 'react'
import CenteredGrid from './Components/CenteredGrid'

import './App.css'

class App extends React.Component {
  componentDidMount = () => {
    const todos = fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        this.setState({ users: json })
      })
  }

  render() {
    console.log(this.state.users)
    return (
      <div>
        <CenteredGrid user={this.state.users} />
        
      </div>
    )
  }
}

function App() {
  return <div />
}

export default App
