import banner3 from '../../../assets/menu/banner3.jpg'
const MenuBanner = () => {
    return (
        <div className="w-full h-[570px] bg-cover mt-5 rounded-xl flex items-center justify-center bg-fixed" style={{ backgroundImage: `url(${banner3})` }}>
            <div className='w-3/4 h-96 bg-[#1f1e1ee6] flex items-center justify-center '>
                <div className='text-center text-white font-bold p-5'>
                    <h1 className="text-5xl text-white">OUR MENU</h1>
                    <p>Would you like to try a dish?</p>
                </div>
            </div>
        </div>
    );
};

export default MenuBanner;