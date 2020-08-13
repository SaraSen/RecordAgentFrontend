import React from "react";
// react plugin used to create charts

import Graph from "react-graph-vis";
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";
// core components


class Dashboard extends React.Component {

  componentDidMount() {
    this.fetchRecordings();
  }

  fetchRecordings = () => {
    fetch(`http://localhost:8080/getallrecordings`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          recordings: data,
          isLoading: false,
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  fetchNodes = (event) => {
    fetch(`http://localhost:8080/getrecordings/` + event.target.value)
      .then(response => response.json())
      .then(data => this.setState({ dummyGraph: data, selectedOption: data }))
      .catch(error => this.setState({ error, isLoading: false }));
  }


  state = {
    isLoading: true,
    users: [],
    error: null,
    selectedOption: {id: 1070828526, recordname: "login to lms", folderlocation: "C:\\PSRRecordings\\1597294422392", events: Array(11)},
    dummyGraph: []
  };

  render() {
    const { isLoading, recordings, error, dummyGraph, selectedOption } = this.state;
    const graph = {
      nodes: [
        { id: 1, label: "Node 1" },
        { id: 2, label: "Node 2" },
        { id: 3, label: "Node 3" },
        { id: 4, label: "Node 4" },
        { id: 5, label: "Node 5" }
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 2, to: 3 },
        { from: 3, to: 4 },
        { from: 4, to: 5 }
      ]
    };

    const options = {
      layout: {
        hierarchical: false,
      },
      edges: {
        color: "#000000"
      },
      nodes: {
        color: "#3EA4F7"
      },
      physics: {
        enabled: true
      },
      height: "500px",
      interaction: { multiselect: true, dragView: true }
    };

    const events = {
      select: function (event) {
        var { nodes, edges } = event;
      }
    };
    return (
      <div className="content">
        <Row>
          <Col lg="12" md="12" sm="12">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="7" xs="1">
                    <div className="numbers">
                      <CardTitle tag="p">Recordings</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Row>
                  <Col md="6" xs="6">
                    <div>
                      <select name="recordings" id="recordings" onChange={this.fetchNodes} >
                        {error ? <p>{error.message}</p> : null}
                        <option>Select a Recording</option>
                        {!isLoading ? (
                          recordings.map(recording => {
                            const { recordname, id } = recording;
                            return (
                              <option value={id} key={id}>Name : {recordname} ID {id}</option >
                            );
                          })
                        ) : (
                            <option>Loading...</option>
                          )}
                      </select>
                    </div>
                  </Col>
                  <Col>
                    {/* <div>
                      {this.selectedOption.map(name => {
                        var { recordname } = name
                        return (
                          <h5>{recordname}</h5>
                        )
                      })}
                    </div> */}
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>

        </Row>





        <Row>
          <Col lg="12" md="12" sm="12">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="7" xs="1">
                    <div className="numbers">
                      <CardTitle tag="p">Workflow</CardTitle>
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
                <Row>
                  <Col md="12" xs="1">
                    <Graph
                      graph={graph}
                      options={options}
                      events={events}
                    />
                    {console.log(this.state.dummyGraph)}
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>

        </Row>

      </div >

    );
  }
}

export default Dashboard;
