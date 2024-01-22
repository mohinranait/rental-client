/* eslint-disable react/prop-types */

const Container = ({children}) => {
    return (
        <div className="container px-5 lg:px-0">
            {children}
        </div>
    );
};

export default Container;