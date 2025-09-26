import User from "../User";
import UserClass from "./userClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props)
        //console.log("Paret constructor is called");
    }

    componentDidMount(){
        //console.log("parent is mounted");
    }
    render(){
    // console.log("parent is rendering");
            return (
              <div>
                <img src="https://media.licdn.com/dms/image/v2/D560BAQG7SSuXc6U_-w/company-logo_200_200/company-logo_200_200/0/1739357006517?e=2147483647&v=beta&t=6Esy_pDy7IUV0w2rw2SYJf5AgmTHz7x-LffPn-qs8oE" />
                <UserClass  />
                <UserClass  />
              </div>
            );

}
}


// const About =()=>{
//     return(
//         <div>
//             <img src="https://media.licdn.com/dms/image/v2/D560BAQG7SSuXc6U_-w/company-logo_200_200/company-logo_200_200/0/1739357006517?e=2147483647&v=beta&t=6Esy_pDy7IUV0w2rw2SYJf5AgmTHz7x-LffPn-qs8oE"/>
//             <UserClass name = {"king of sea(class)"}/>
//         </div>
//     )
// }

export default About;