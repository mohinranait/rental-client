/* eslint-disable react/prop-types */


const ButtonPrimary = ({type, children,  bg='bg-primary', color='text-white', options }) => {
    return (
        <>
            <button type={type} className={`text-center py-2 px-4 rounded ${bg} ${color}  ${options} `}>{children}</button>   
        </>
    );
};

export default ButtonPrimary;