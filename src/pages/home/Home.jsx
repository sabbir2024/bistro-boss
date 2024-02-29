import Header from "../../components/Header";
import Container from "../../components/container/Container ";
import CallUs from "./CallUs";
import Catagory from "./Catagory";
import ChefService from "./ChefService";
import OurMenu from "./OurMenu";
import PopulorItem from "./PopulorItem";
import Testimonuals from "./Testimonuals";
import Banner from "./banner/Banner";



const Home = () => {
    return (

        <div>
            <Container>
                <Banner />
                <Catagory />
                <ChefService />
                <PopulorItem />
                <CallUs />
                <OurMenu />
                <Testimonuals />
            </Container>

        </div>
    );
};

export default Home;