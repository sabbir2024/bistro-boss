import { useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuItem from "../shared/menuItem/MenuItem";


const PopulorItem = () => {
    const [menu, setMemu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setMemu(popularItems);
            })
    }, [])
    return (
        <>
            <Header title='FROM OUR MENU' header='Check it out' />
            <div className="grid md:grid-cols-2 gap-4">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </>
    );
};

export default PopulorItem;