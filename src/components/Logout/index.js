import './index.css'

const Logout = props => {
  const {onclick} = props

  return (
    <div className="container">
      <h1 className="please">Please Login</h1>
      <button type="button" className="btn" onClick={onclick}>
        Login
      </button>
    </div>
  )
}

export default Logout
