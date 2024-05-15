import React, { Component } from 'react'
interface State{
    name:string
}
interface Props{

}
export default class Class extends Component<Props,State> {
    constructor(props:Props){
        super(props)
        this.state ={
            name:"Hà Huyền Trang"
        }
    }
    handleClick=()=>{
        this.setState({
            name:"Trangg"
        })
    }
  render() {
    return (
      <div>
        Class
        <p>
            xin chào {this.state.name}
        </p>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}
