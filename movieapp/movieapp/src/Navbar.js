import { Component } from "react";

class Navbar extends Component{

    render(){
        return (
            <>
                <div>
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