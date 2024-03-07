import { useState, useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../hooks/useMenu";
import OrderCard from "./OrderCard";
import { useParams } from "react-router-dom";

const OrderCategory = () => {
    const [menu, loading] = useMenu();
    const { categorys } = useParams();
    const [tabIndex, setTabIndex] = useState(0);
    const uniqueCategories = [...new Set(menu.map(item => item.category))];
    useEffect(() => {
        if (menu) {
            const initialIndex = menu.findIndex(item => item.category === categorys);
            if (initialIndex !== -1) {
                setTabIndex(initialIndex);
            }
        }
    }, [menu, categorys]);

    return (
        <>
            {loading ? (
                <progress className="progress w-full"></progress>
            ) : (
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        {uniqueCategories?.map(item => (
                            <Tab key={item.category}>
                                <h1 className="uppercase">{item}</h1>
                            </Tab>
                        ))}
                    </TabList>
                    {menu.map((category, index) => (
                        <TabPanel key={index}>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {menu.filter(item => item.category === category.category).map(item => (
                                    <OrderCard key={item._id} item={item} />
                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            )}
        </>
    );
};

export default OrderCategory;
