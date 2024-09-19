import { FunctionComponent } from "react";

interface HomeProps {
    userName: string;
}

const Home: FunctionComponent<HomeProps> = ({userName}) => {
    const welcomeHandler = () => {
        console.log("Welcome Dima");
        
    }
    const welcomeHandlerAgain = (userName: string) => {
        console.log("Welcome back " + userName);
        
    }

    return (
    <>
    <h1>Home Page</h1>
    <button className="btn btn-danger mx-3" onClick={welcomeHandler}>Welcome</button>
    <button className="btn btn-secondary" onClick={() => welcomeHandlerAgain(userName)}>Welcome Again</button>
    </>
    );
}

export default Home;