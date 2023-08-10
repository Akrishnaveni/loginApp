
import Login from '../Login/index'
import Logout from '../Logout/index'
import './index.css'
import {Component} from 'react'


class Home extends Component {
  state = {islogin: false}
  
  Onclick = () => {
    this.setState(prevState => ({islogin: !prevState.islogin}))
  }
  
  render() {
    const {islogin} = this.state
    return (
      <div className="container">
        {islogin && <Login/>}
        {!islogin && <Logout/>}
      </div>
    )
  }
}

export default Home
