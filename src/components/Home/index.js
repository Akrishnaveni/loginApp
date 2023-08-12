import './index.css'
import {Component} from 'react'
import Login from '../Login/index'
import Logout from '../Logout/index'

class Home extends Component {
  state = {islogin: false}

  Onclick = () => {
    this.setState(prevState => ({islogin: !prevState.islogin}))
  }

  render() {
    const {islogin} = this.state
    return (
      <div className="container">
        {islogin && <Login onclick={this.Onclick} />}
        {!islogin && <Logout onclick={this.onclick} />}
      </div>
    )
  }
}
export default Home
