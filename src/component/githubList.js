// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import GithubItem from "./githubItem"


const GithubList =(props)=>{
    const {repos}=props

    return(
        <div>
            <h1>elledavis</h1>
            <h3>{repos && repos.map(repo => <GithubItem repo={repo} key={repo.id}/>)}</h3>
            
            
        </div>
    )
}
export default GithubList