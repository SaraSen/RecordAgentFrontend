import React, { Component } from 'react';
import "./BasicElements.scss";
import * as SRD from "storm-react-diagrams";
require("storm-react-diagrams/dist/style.min.css");


export class BasicElements extends Component {

  

  state = {
    startDate: new Date()
  };
 
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  render() {

    
// 1) setup the diagram engine
var engine = new SRD.DiagramEngine();
engine.installDefaultFactories();

// 2) setup the diagram model
var model = new SRD.DiagramModel();

// 3) create a default node
var node1 = new SRD.DefaultNodeModel("Node 1", "rgb(0,192,255)");
let port1 = node1.addOutPort("Out");
node1.setPosition(100, 100);

// 4) create another default node
var node2 = new SRD.DefaultNodeModel("Node 2", "rgb(192,255,0)");
let port2 = node2.addInPort("In");
node2.setPosition(400, 100);

var node3 = new SRD.DefaultNodeModel("Node 2", "rgb(192,255,0)");
let port3 = node3.addInPort("In");
node3.setPosition(400, 200);

var node4 = new SRD.DefaultNodeModel("Node 2", "rgb(0,192,255)");
let port4 = node4.addInPort("Out");
node4.setPosition(400, 300);


// 5) link the ports
let link1 = port1.link(port2);
// let link2 = port3.link(port4)

// 6) add the models to the root graph
model.addAll(node1, node2, node3, node4, link1);

// 7) load model into engine
engine.setDiagramModel(model);
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Charts </h3>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Charts</a></li>
              <li className="breadcrumb-item active" aria-current="page">Dataflow Diagram for tasks 001</li>
            </ol>
          </nav>
        </div>
        <div className="row">
         
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
              <SRD.DiagramWidget className="srd-demo-canvas" diagramEngine={engine} />
              </div>
            </div>
          </div>
          
          </div>
        </div>
    )
  }
}

export default BasicElements
