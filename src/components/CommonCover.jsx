

const CommonCover = ({ img, title, subtitle }) => {
    return (
        <div className="w-full h-[570px] bg-cover mt-5 rounded-xl flex items-center justify-center bg-fixed" style={{ backgroundImage: `url(${img})` }}>
            <div className='w-3/4 h-96 bg-[#1f1e1ee6] flex items-center justify-center '>
                <div className='text-center text-white font-bold p-5'>
                    <h1 className="text-5xl uppercase text-white">{title}</h1>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    );
};

export default CommonCover;