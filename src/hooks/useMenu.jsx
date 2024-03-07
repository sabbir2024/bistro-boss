import { useEffect, useState } from "react";


const useMenu = () => {
    const [menu, setMemu] = useState([]);
    const [loading, steLoading] = useState(true);
    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                setMemu(data);
                steLoading(false);
            })
    }, [])
    return [menu, loading];
};

export default useMenu;