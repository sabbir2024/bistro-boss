

const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="flex gap-5">
            {/* <img className="w-[100px]  rounded-[0 200px 200px 200px]" src={image} alt="" /> */}

            <img className="w-14" style={{ borderRadius: '0 50px 50px 50px' }} src={image} alt="" />
            <div>
                <h3 className="uppercase text-lg">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>

    );
};

export default MenuItem;