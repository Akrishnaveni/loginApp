import './index.css'

const Login = props => {
  const {onclick} = props

  return (
    <div className="container">
      <h1 className="welcome">Welcome User</h1>
      <button type="button" className="btn" onClick={onclick}>
        Logout
      </button>
    </div>
  )
}

export default Login
