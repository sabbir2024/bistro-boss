import { Link } from "react-router-dom";

const Error = () => {
    
    return (
        <div className="relative bg-[url('https://i.ibb.co/3BfqyW2/4o4.jpg')] w-full h-screen p-11 bg-no-repeat bg-center flex justify-center items-end">
  <h1 className="text-4xl w-72 animate-bounce text-center p-5 text-white font-bold bg-blue-400 rounded-xl">
    <Link to={'/'}>Go to Home</Link>
  </h1>
</div>

    );
};

export default Error;