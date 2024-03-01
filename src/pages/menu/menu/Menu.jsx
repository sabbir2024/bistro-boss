import CommonBanner from "../../../components/CommonBanner";
import Container from "../../../components/container/Container ";
import MenuBanner from "./MenuBanner";

const Menu = () => {
    return (
        <Container>
            <div>
                <MenuBanner />
                <CommonBanner
                    title='salat' subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, necessitatibus! Distinctio minus animi adipisci vel excepturi? Obcaecati distinctio magnam modi neque vero sit ab, voluptatum et omnis laboriosam asperiores alias, corporis reprehenderit totam. Molestiae at quo illum neque officia assumenda earum quia eligendi. Fugiat unde deleniti obcaecati ratione vero earum?'
                ></CommonBanner>
            </div>
        </Container>
    );
};


export default Menu;