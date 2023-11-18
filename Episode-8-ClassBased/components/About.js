import User from "./User";
import UserClassBased from "./UserClassBased";

const About = () =>{
    return (
        <div>
            <h1>About</h1>
            <h2>This is Namaste React Episode 7</h2>
            <User name={'Prashant'}/>
            <UserClassBased name={'Prashant Puri class 0 based'} location={"Amritsar"}/>
            <UserClassBased name={'Prashant Puri class 1 based'} location={"Amritsar"}/>
            <UserClassBased name={'Prashant Puri class 2 based'} location={"Amritsar"}/>
           
        </div>
    )
}

export default About;

/**
 * Parent constructor
 * Parent render
 * 
 * First constructor
 * First Render
 * 
 * Second constructor
 * Second Render
 * 
 * <DOM Updated - In single batch>
 * 
 * First componentDidMount
 * Second componentDidMount
 * 
 * Parent componentDidMount 
 */