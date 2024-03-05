
import Header from "../../../components/Header";
import useMenu from "../../../hooks/useMenu";
import MenuItem from "../../shared/menuItem/MenuItem";


const MenuItems = ({ categorys, title, header }) => {
    const [menu] = useMenu()
    const popularItems = menu.filter(item => item.category === categorys);
    return (
        <div>
            {title && <Header
                title={title}
                header={header}
            ></Header>}
            <div className="grid md:grid-cols-2 gap-4 py-7">
                {
                    popularItems?.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className="w-full flex justify-center mx-auto">
                <button className="btn btn-outline btn-warning border-b-4">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>
    );
};

export default MenuItems;