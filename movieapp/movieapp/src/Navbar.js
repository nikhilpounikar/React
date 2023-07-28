import { Component } from "react";

class Navbar extends Component{

    render(){
        return (
            <>
                <div style={{ width:"100%",height:70,backgroundColor:"#db2828",display:"flex",justifyContent:"space-around",color:'white'}}>
                   <div>
                    Title
                   </div>
                   <div>
                    <img alt="cart_icon"/>
                        <span>0</span>
                    
                    </div>
                </div>
            </>
        )
    }

}


export default Navbar;