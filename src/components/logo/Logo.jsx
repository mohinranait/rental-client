
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <>
        <Link to={'/'} className="text-2xl md:text-4xl font-bold text-primary underline">
            <span className="underline ">RENT</span><span className=" pr-2 py-1 rounded-md">LIST</span>
        </Link>
        </>
    );
};

export default Logo;