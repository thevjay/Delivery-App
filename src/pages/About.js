import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);

        this.state={
            count:0,
            count2:0,
        };

    }

    componentDidMount(){
        // console.log('mounted');
    }

    render(){
        return(
            <div className="py-16 text-center min-h-[80vh]">
                <img
                    src="https://www.shopurfood.com/blogs/wp-content/uploads/2022/06/How-to-Retain-in-the-Future-of-Online-Food-Delivery-industry.jpg"
                    alt=""
                    className="w-full max-w-[480px] mx-auto rounded-lg"
                />

                <div className="w-[90%] max-w-[480px] mx-auto">
                    <h1 className="text-3xl my-4">Foody 🍔</h1>

                    <p>
                        Foody is a food ordering web application built with React.js ⚛ and Swiggy's API.
                    </p>
                    <p>
                        This project was built 🔧 during the coursework of{' '} React Js
                    </p>


                    <p>Count1 :{this.state.count}</p>
                    <p>count2 :{this.state.count2}</p>
                    <button
                        className="border my-2 bg-gray-300 p-2 px-4 rounded-md"
                        onClick={()=>{
                            this.setState({
                                count:this.state.count+1
                            })
                        }}
                    >
                        Click me
                    </button>
                </div>
            </div>
        )
    }
}

export default About;