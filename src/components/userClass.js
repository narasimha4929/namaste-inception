import React from "react";
class UserClass extends React.Component{
    //when this component is rendered first this constructor is called 
    constructor(props){
        super(props);
        console.log(props);

        this.state={
            userInfo:{
                name:"Bunny",
                location:"hyderabad",
            }
        }
    }

    async componentDidMount(){
       //console.log("child compoent didmount");

        const data = await fetch("https://api.github.com/users/narasimha4929");
       const json = await data.json();
       console.log(json);
       this.setState({
        userInfo:json,
       })
    }
    componentDidUpdate(){
        console.log("component updated!!!!")
    }

    render(){
          return (
            <div className="user-card">
              <h1>Name:{this.state.userInfo.login}</h1>
              <h2>Location:{this.state.userInfo.location}</h2>
            </div>
          );
    }
}

export default UserClass;