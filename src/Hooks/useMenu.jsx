import { useEffect, useState } from "react";

const useMenu = (menuName) => {
    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter((item) => item.category === menuName);
                setMenu(popularItems);
                setLoading(false)
            })
    }, [menuName])
    return [menu, loading]
};

export default useMenu;