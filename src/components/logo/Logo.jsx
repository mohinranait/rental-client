
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <>
        <Link to={'/'} className="text-4xl font-bold text-white underline">
            <span className="underline ">RENT</span><span className="bg-primary pr-2 py-1 rounded-md">LIST</span>
        </Link>
        </>
    );
};

export default Logo;