

const Header = ({ title, header }) => {
    return (
        <div className="w-1/3 text-center justify-center mx-auto">
            <p className="text-[#D99904]">------  {header}  --------</p>
            <h1 className="text-3xl font-bold border-y-4 border-[#E8E8E8]">{title}</h1>
        </div>
    );
};

export default Header;