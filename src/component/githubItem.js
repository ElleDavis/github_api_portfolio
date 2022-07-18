const GithubItem = (props) => {
    const { repo }= props
  
    return(
        <div>
            <h4>Github Repository</h4>
           <h1> {repo.name}</h1>
            {/* <img src={repo.owner.avatar_url} alt={repo.name} /> */}
        </div>
    )
}
export default GithubItem