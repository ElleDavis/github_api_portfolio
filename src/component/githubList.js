
import GithubItem from "./githubItem"


const GithubList =(props)=>{
    const {repos}=props
    return(
        <div>
            <h3>{repos && repos.map(repo => <GithubItem repo={repo} key={repo.id}/>)}</h3>
        </div>
    )
}
export default GithubList