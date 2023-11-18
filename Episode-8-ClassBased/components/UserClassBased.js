import React from 'react';

class UserClassBased extends ReactComponent{
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            count2: 2
        }
        console.log(this.props.name + "constructor rendered");
    }

    componentDidMount(){
        console.log(this.props.name + 'component did mount rendered');
    }


    render(){

        console.log(this.props.name+ 'component rendered');
        const {name, location} = this.props;
        const {count, count2} = this.state;

        return (
            <div className="user-card">
                <h2>{count}</h2>
                <button onClick={()=>{
                    // never update State variables directly
                    this.setState({
                        count: this.state.count+1,
                        count2: this.state.count2+2,
                    });
                }}></button>
                <h2>{count2}</h2>
                <h1>name: {name}</h1>
                <h2>location: {location}</h2>
                <h3>phone no: 0000000000</h3>

            </div>
        );
    }
}
export default UserClassBased;