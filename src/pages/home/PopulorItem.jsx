import { useEffect, useState } from "react";
import Header from "../../components/Header";
import MenuItem from "../shared/menuItem/MenuItem";
import useMenu from "../../hooks/useMenu"

const PopulorItem = () => {
    const [menu] = useMenu()
    const popularItems = menu.filter(item => item.category === 'popular');

    return (
        <>
            <Header title='FROM OUR MENU' header='Check it out' />
            <div className="grid md:grid-cols-2 gap-4">
                {
                    popularItems.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </>
    );
};

export default PopulorItem;