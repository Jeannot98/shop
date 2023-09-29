import './Login.scss'

const Login = () => {
  return (
    <div className='forms'>
        <form className="form" action="">
            <label htmlFor="">Email</label>
            <input type="text" placeholder='email'/>
            <label htmlFor="">PassWord</label>
            <input type="password" placeholder='Password'/>
            <button type='submit'>Next</button>
        </form>
    </div>
  )
}

export default Login