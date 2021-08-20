function SignIn() {
    const handleSubmit = (e) => {
        console.log(e)
    }

    const handleChange = (e) => {
        console.log(e)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <div>
                    <input type="email" onChange={handleChange} placeholder="email" />
                    <input type="password" onChange={handleChange} placeholder="password" />
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default SignIn
