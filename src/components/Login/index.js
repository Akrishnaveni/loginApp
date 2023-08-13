import './index.css'

import Message from '../Message/index'

const Login = props => {
  const {onclick} = props

  return (
    <div className="container">
      <Message message="Welcome User" />
      <button type="button" className="btn" onClick={onclick}>
        Logout
      </button>
    </div>
  )
}

export default Login
