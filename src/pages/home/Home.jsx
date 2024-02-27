import Header from "../../components/Header";
import Container from "../../components/container/Container ";
import Catagory from "./Catagory";
import Banner from "./banner/Banner";



const Home = () => {
    return (

        <div>
            home
            <button className="btn btn-outline btn-info">Info</button>
            <button className="btn btn-outline btn-success">Success</button>
            <button className="btn btn-outline btn-warning">Warning</button>
            <button className="btn btn-outline btn-error">Error</button>
            <Container>
                <Banner />
                <Catagory />
            </Container>
        </div>
    );
};

export default Home;