import featured from '../../assets/home/featured.jpg'
import Header from '../../components/Header';
const OurMenu = () => {
    return (
        <div>
            <div className="text-white w-full bg-cover opacity-100 " style={{ backgroundImage: `url(${featured})` }}>
                <div className='bg-gradient-to-r from-[#3d3a3a45] to-[#3d3a3a4a] py-7'>
                    <Header
                        header={'Check it out-'}
                        title={'FROM OUR MENU'}
                    ></Header>
                    <div className='md:flex justify-center mx-auto space-x-7 '>
                        <img className='w-96' src={featured} alt="featured" />
                        <div className='w-96'>
                            <p>March 20, 2023</p>
                            <p>WHERE CAN I GET SOME?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMenu;