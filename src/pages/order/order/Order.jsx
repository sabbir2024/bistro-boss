import { Helmet } from "react-helmet-async";
import CommonCover from "../../../components/CommonCover";
import img from "../../../assets/shop/banner2.jpg"
import OrderCategory from "../OrderCategory";
import Container from "../../../components/container/Container ";

const Order = () => {
    return (
        <div>
            <Container>
                <Helmet><title>Bistro Boss || Order</title></Helmet>
                <CommonCover
                    img={img}
                    title={'OUR SHOP'}
                    subtitle={'Would you like to try a dish?'}
                ></CommonCover>

                <OrderCategory></OrderCategory>
            </Container>
        </div>

    );
};

export default Order;