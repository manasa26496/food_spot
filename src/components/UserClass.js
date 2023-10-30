//using class-based component
//extends react.comp will make react know it's a class based
//render method is the diference and converts to html and displays on page
//start with class and extends
//constructor will receive props
//super props must be used if not it will throw an error
//this keyword to be used
import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        //state variable, 
        //it's a big object and contains all state variables so no need to create another state variable
        /** onclick of the button will update the state variable */
        //NEVERUPDATE state variables directly as count+1;
        this.state={
           userInfo:{
            name:"Dummy",
            location :"Default",
            avatar_url:"http.dummy",
           },
        };
        // console.log("child constructor")
    }
    async componentDidMount(){
        // console.log("childcomp did mount")
        //api call
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        //updated state variable with data
        this.setState({
            userInfo:json,
        });

        console.log(json);
    }
//this.setstate will contsin updated value of state variable
    render(){
        const {name,location,avatar_url} = this.state.userInfo;
        return (
            <div className ="user-card">
            <h2>Name:{name}</h2>
            <h3>Location:{location}</h3>
            <img src={avatar_url} />
            <h4>Contact:xyz@gmail</h4>
        </div>
        );
    }
}
export default UserClass;