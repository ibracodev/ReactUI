import { Component } from 'react';
import './App.css';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';
import ReactPlayer from 'react-player';


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount(){
    fetch('https://api.sampleapis.com/futurama/episodes')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render()
  {

    var {isLoaded, items} = this.state;

      if(!isLoaded)
      {
        return<div>Loading...</div>;

      }
      else
      {
        return (
          <div className="App">
            <header className="App-header">
              <h1 className='Title'>Futurama Episodes</h1>
            </header>

            <br></br>
            <body>
              <div>
                <Container>
                    <Row>
                        {items.map(item => (    
                          <Col>
                                  <Card className="shadow-lg p-3 mb-5 bg-white rounded" style={{ width: '18rem' }}>
      
                                  <div class="embed-responsive embed-responsive-16by9">
                                      <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/ScMzIvxBSi4" width="100%" height="100%" loading="lazy" allowFullScreen="true"></iframe>
                                  </div>
                            
                                  <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Subtitle>{item.number}</Card.Subtitle>
                                    <Card.Text>
                                        Description: {item.desc}
                                    </Card.Text>
                                    <Card.Text>
                                        Writers: {item.writers}
                                    </Card.Text>
                                    <Card.Text>
                                        Airdate: {item.originalAirDate}
                                    </Card.Text>
                                  </Card.Body>
                                </Card>
                           </Col>   
                        ))};
                        
                    </Row>
                </Container>
              </div>
            </body>

          </div>
        );
      }

  }
}

export default App;



//<ReactPlayer url='https://www.youtube.com/watch?v=ScMzIvxBSi4'  width='100%' height='100%' />