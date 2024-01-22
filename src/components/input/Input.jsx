/* eslint-disable react/prop-types */


const Input = ({type, onChange, value, placeholder}) => {
    return (
        <>
            <input type={type} onChange={onChange} placeholder={placeholder} defaultValue={value} className='py-2 w-full outline-none border px-3 rounded ' />
        </>
    );
};

export default Input;