import React, { Component } from 'react';
import Graph from "../../../node_modules/react-graph-vis";

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
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
        interaction: { multiselect: true, dragView: true }
      },
      graph: {
        nodes: [
          { id: 1, label: "Node 1" },
          { id: 2, label: "Node 2" },
          { id: 3, label: "Node 3" },
          { id: 4, label: "Node 4" },
          { id: 5, label: "Node 5" }
        ],
        edges: [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 2, to: 4 },
          { from: 2, to: 5 }
        ]
      },
      startDate: new Date(),
      todos: [
        {
          id: 1,
          task: 'Learn tutorial about microservices',
          isCompleted: false
        },
        {
          id: 2,
          task: 'Prepare for presentation',
          isCompleted: false
        },
        {
          id: 3,
          task: 'Upload tutorial on Eureka server',
          isCompleted: false
        },
      ],
      inputValue: '',
    }
    this.statusChangedHandler = this.statusChangedHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  statusChangedHandler(event, id) {
    const todo = { ...this.state.todos[id] };
    todo.isCompleted = event.target.checked;

    const todos = [...this.state.todos];
    todos[id] = todo;

    this.setState({
      todos: todos
    })
  }

  addTodo(event) {
    event.preventDefault();

    const todos = [...this.state.todos];
    todos.unshift({
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      task: this.state.inputValue,
      isCompleted: false

    })

    this.setState({
      todos: todos,
      inputValue: ''
    })
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos: todos
    })
  }

  inputChangeHandler(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  amountDueBarOptions = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },

    scales: {
      responsive: true,
      maintainAspectRatio: true,
      yAxes: [{
        display: false,
        gridLines: {
          color: 'rgba(0, 0, 0, 0.03)',
        }
      }],
      xAxes: [{
        display: false,
        barPercentage: 0.4,
        gridLines: {
          display: false,
        }
      }]
    },
    legend: {
      display: false
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", e => { });
    document.addEventListener("mousemove", e => { });
  }

  events = {
    dragStart: event => { },
    dragEnd: event => { }
  };
  render() {
    return (
      <div>

        <div className="row">

          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-account-box-multiple text-info icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Completed Courses</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">09</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <div id="graph" style={{ height: "100vh" }}>
                  <Graph
                    graph={this.state.graph}
                    options={this.state.options}
                    events={this.state.events}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-sm-12  grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Todo</h4>
                <form className="add-items d-lg-flex" onSubmit={this.addTodo}>
                  <input
                    type="text"
                    className="form-control h-auto"
                    placeholder="What do you need to do today?"
                    value={this.state.inputValue}
                    onChange={this.inputChangeHandler}
                    required />
                  <button type="submit" className="btn btn-primary font-weight-bold ml-0 mt-2 mt-lg-0">Add</button>
                </form>
                <div className="list-wrapper">
                  <ul className="d-flex flex-column todo-list todo-padding-lg">
                    {this.state.todos.map((todo, index) => {
                      return <ListItem
                        isCompleted={todo.isCompleted}
                        changed={(event) => this.statusChangedHandler(event, index)}
                        key={todo.id}
                        remove={() => this.removeTodo(index)}
                      >{todo.task}</ListItem>
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const ListItem = (props) => {
  return (
    <li className={(props.isCompleted ? 'completed' : null)}>
      <div className="form-check form-check-success m-0 align-items-start">
        <label htmlFor="" className="form-check-label font-weight-medium">
          <input className="checkbox" type="checkbox"
            checked={props.isCompleted}
            onChange={props.changed}
          /> {props.children} <i className="input-helper"></i>
        </label>
      </div>
      <i className="remove mdi mdi-close-circle-outline" onClick={props.remove}></i>
    </li>
  )
};
export default Dashboard;