function login(){
    return(
        <>
            <p>
                Login
            </p>
            <form>
                <input type="email" placeholder="E-mail" required />
                <input type="password" placeholder="Password" required />
                <input type="checkbox" />Remember Me
                <button>Submit</button>
            </form>
        </>
    )
}

export default login;