import { Helmet } from "react-helmet-async";
import Container from "../../../components/container/Container ";
import MenuBanner from '../../../assets/menu/banner3.jpg'
import dessert from '../../../assets/menu/dessert-bg.jpeg'
import pizza from '../../../assets/menu/pizza-bg.jpg'
import salad from '../../../assets/menu/salad-bg.jpg'
import soup from '../../../assets/menu/soup-bg.jpg'
import CommonCover from "../../../components/CommonCover";
import MenuItems from "../menuItems/MenuItems";
const Menu = () => {
    return (
        <Container>
            <Helmet><title>Bistro Boss || Our Manu</title></Helmet>
            <div>

                <CommonCover
                    title='Our Menu' subtitle='Would you like to try a dish?' img={MenuBanner}
                ></CommonCover>
                <MenuItems
                    categorys={'offered'}
                    header={'Do not miss'}
                    title={`TODAY'S OFFER`}
                ></MenuItems>
                <CommonCover
                    title='DESSERTS'
                    subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    img={dessert}
                ></CommonCover>
                <MenuItems
                    categorys={'dessert'}
                ></MenuItems>
                <CommonCover
                    title='pizza'
                    subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    img={pizza}
                ></CommonCover>
                <MenuItems
                    categorys={'pizza'}
                ></MenuItems>
                <CommonCover
                    title='salad'
                    subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    img={salad}
                ></CommonCover>
                <MenuItems
                    categorys={'salad'}
                ></MenuItems>
                <CommonCover
                    title='soup'
                    subtitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
                    img={soup}
                ></CommonCover>
                <MenuItems
                    categorys={'soup'}
                ></MenuItems>
            </div>
        </Container>
    );
};


export default Menu;