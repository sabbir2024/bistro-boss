import Service from '../../assets/home/chef-service.jpg';

const ChefService = () => {
    return (
        <div className="w-full h-[570px] bg-cover mt-5 rounded-xl flex items-center justify-center bg-fixed" style={{ backgroundImage: `url(${Service})` }}>
            <div className='w-3/4 h-96 glass flex items-center justify-center '>
                <div className='text-center font-bold p-5'>
                    <h1 className="text-3xl text-black">Bistro Boss</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet consequuntur laborum cupiditate illum soluta! Nihil assumenda beatae commodi vel sapiente, expedita qui blanditiis suscipit magni autem iure voluptatem adipisci repudiandae. Quam doloremque, illo cum earum exercitationem illum dignissimos asperiores qui beatae accusamus enim ducimus, odio, itaque repellat. Consequatur, magnam eaque.</p>
                </div>
            </div>
        </div>
    );
};

export default ChefService;
