import React, {Component} from "react";
import './LoginAndSignUp.css';

export default class UserInfo extends Component{
    constructor(props){
        super(props);
        this.state= {
            userInfo: "",
        };
    }
    componentDidMount(){
        fetch("http://localhost:5000/userInfo", {
        method: "POST",
        crossDomain:true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
        },
        body:JSON.stringify({
            token:window.localStorage.getItem("token"),
        }),
        }).then((res)=>res.json())
        .then((data)=>{
            console.log("We are in data and this is admin value: " + data.data.admin)
            console.log(data,"userInfo");
            this.setState({userInfo: data.data});

        })
    }

    

    render(){
        return(
            <div className="user-info">
                {this.state.userInfo && (
                    <React.Fragment>
                        <div>
                            Name<h1>{this.state.userInfo.fname + " " + this.state.userInfo.lname}</h1>
                        </div>
                        <div>
                            Email<h1>{this.state.userInfo.email}</h1>
                        </div>
                        <div>
                            Admin<h1>{this.state.userInfo.admin.toString()}</h1>
                        </div>
                    </React.Fragment>
                )}
            </div>
        );
    }
}