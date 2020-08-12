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
} from "reactstrap";
// core components


class Dashboard extends React.Component {

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers() {
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

  fetchNodes() {
    const { recordings} = this.state;
    for (var i = 0; i < this.state.recordings.size(); i++) {
      recordings.map(recording => {
        const { recordname, id } = recording;
        return { recordname };
      })

    }
  }

  state = {
    isLoading: true,
    users: [],
    error: null,
  };

  render() {
    const { isLoading, recordings, error } = this.state;
    const graph = {
      nodes: [
        { id: 1, label: "Node 1"},
        { id: 2, label: "Node 2"},
        { id: 3, label: "Node 3"},
        { id: 4, label: "Node 4"},
        { id: 5, label: "Node 5"}
      ],
      edges: [
        { from: 1, to: 2 },
        { from: 1, to: 3 },
        { from: 2, to: 4 },
        { from: 2, to: 5 }
      ]
    };

    const options = {
      layout: {
        // hierarchical: true,
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
                  <Col md="7" xs="1">
                    <div>
                      <select name="recordings" id="recordings">
                        {error ? <p>{error.message}</p> : null}
                        {!isLoading ? (
                          recordings.map(recording => {
                            const { recordname, id, events } = recording;
                            return (
                              <option value={id}>Name : {recordname} ID {id}</option >
                            );
                          })
                        ) : (
                            <option>Loading...</option>
                          )}
                      </select>
                    </div>
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
