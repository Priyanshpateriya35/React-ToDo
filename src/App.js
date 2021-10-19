import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import './App.css';
import Plan from './plan'
import './index.css'
// import { element } from 'prop-types'

export default class App extends Component {
  state={
    items:[],
    text: ""
  }

  handlechange=(e)=>{
    
    this.setState({text: e.target.value})
  }
  handelAdd=()=>{
    if(this.state.text === "")
    { 
       alert("You have not written anything please write then Add!")
    }

      else {          //Spread operator
      const items = [...this.state.items, this.state.text];
      this.setState({ items: items, text: "" });
        }
  }
  handledelete=(id) => {
    //console.log("delted",  id);
    const Olditems = [...this.state.items]
    //console.log("Olditems", Olditems)
     const items = Olditems.filter((element, i) => {
          //console.log("new Items", element) 
     return i !== id
   });
this.setState({items: items})
  }

  render() {
    return (
      <div className="Container-fluid my-5">
         <div className="row">
            <div className="col-sm-6 mx-auto my-auto text-white shadow-lg p-3">
                 <h2 className="text-center">To-Do List</h2>

                    <div className="row">
                      <div className="col-9">
                       <input type="text" className="form-control" placeholder="Write Plan here..." value={this.state.text} onChange={this.handlechange}></input>
                      </div>
                        <div className="col-2">
                          <button className="btn btn-warning px-4 font-weight-bold" onClick= { this.handelAdd}>Add</button>
                          
                        </div> 
                        <div className="container-fluid">
                         {/* </ul className="list-unstyled row m-5">
                            {
                               this.state.items.map((value, i)=>{
                                return <Plan key={i} id={i} value={value} sendData={this.handledelete}/>
                              })
                            }
                          </ul> */}
                          <ul className="list-unstyled row m-5" >
                            <Plan p={this.state.items} sendData={this.handledelete}  />
                          </ul>

                        </div>
              </div>
            </div>

         </div>
        
      </div>
    )
  }
}
