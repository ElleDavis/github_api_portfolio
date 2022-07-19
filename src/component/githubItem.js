import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const GithubItem = (props) => {
    const { repo }= props
  
    return(
        <div>
            {/* <h4>Github Repository</h4> */}
            {/* <h1> {repo.name}</h1> */}
            {/* <img src={repo.owner.avatar_url} alt={repo.name} /> */}
            <CardGroup>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={repo.owner.avatar_url} alt={repo.name} />
                    <Card.Body>
                        <Card.Title>{repo.language}</Card.Title>
                            <Card.Text>{repo.name}</Card.Text>
                        <Button variant="primary" href={repo.html_url}>Take a Look</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    )
}
export default GithubItem