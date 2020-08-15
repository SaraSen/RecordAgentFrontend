
import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Record details</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>steps</th>
                        <th>image</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Batman</td>
                        <td>
                          <ul style={{listStyleType: 'none'}}>
                            <li>a</li>
                            <hr></hr>
                            <li>b</li>
                            <hr></hr>
                            <li>c</li>
                            <hr></hr>
                          </ul>
                        </td>
                        <td>
                        <ul style={{listStyleType: 'none'}}>
                            <li>a.jpg</li>
                            <hr></hr>
                            <li>b.jpg</li>
                            <hr></hr>
                            <li>c.jpg</li>
                            <hr></hr>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                      <td>Batman</td>
                        <td>
                          <ul style={{listStyleType: 'none'}}>
                            <li>a</li>
                            <hr></hr>
                            <li>b</li>
                            <hr></hr>
                            <li>c</li>
                            <hr></hr>
                          </ul>
                        </td>
                        <td>
                        <ul style={{listStyleType: 'none'}}>
                            <li>a.jpg</li>
                            <hr></hr>
                            <li>b.jpg</li>
                            <hr></hr>
                            <li>c.jpg</li>
                            <hr></hr>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
