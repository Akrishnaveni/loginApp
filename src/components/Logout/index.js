import './index.css'

import Message from '../Message/index'

const Logout = props => {
  const {onclick} = props

  return (
    <div className="container">
      <Message message="Please Login" />
      <button type="button" className="btn" onClick={onclick}>
        Login
      </button>
    </div>
  )
}

export default Logout
