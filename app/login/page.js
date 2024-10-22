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
                <submit>Submit</submit>
            </form>
        </>
    )
}

export default login;