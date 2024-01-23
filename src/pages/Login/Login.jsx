import { Link, useNavigate } from "react-router-dom";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import Input from "../../components/input/Input";
import { CgSpinnerTwo } from "react-icons/cg";
import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";


const Login = () => {
    const { setUser} = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const axios = useAxios();
    const [formValue, setFormValue] = useState({
        email: '',
        password:'',
    })


    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password} = formValue;
        if( email.length == 0 || password?.length == 0){
            return setError("Please! All inputs filed is required")
        }else{
            setError("")
        }
        
        try {
            setLoading(true)
            const res = await axios.post(`/login`, formValue)
            if(res.data.success){
                // console.log(res.data.user.role);
                setUser(res.data.user);
                if(res.data?.user?.role == 'houseOwner'){
                    const path = JSON.parse(localStorage.getItem('path'));
               
                    navigate(path ? path : res.data?.user?.role == 'houseOwner' ? '/owner/dashboard' : '/user/dashboard' )
                    localStorage.removeItem('path')
                }else{
                    navigate('/')
                }
                setLoading(false)
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="md:w-[500px] bg-white rounded-md px-10 py-10">
                <form onSubmit={handleLogin}>
                    <h1 className="text-4xl font-bold mb-7 text-gray-600">Login</h1>
                    {
                        error &&  <div className="bg-primary px-3 py-3 rounded mb-5 bg-opacity-10  text-primary font-medium">
                            {error}
                        </div>
                    }
                    <div className="space-y-5">
                        <div>
                            <Input 
                            type={'email'} 
                            placeholder={"Email"} 
                            value={formValue.email} 
                            onChange={(e) => setFormValue({...formValue, email:e.target.value})} 
                            />
                        </div>
                        <div>
                            <Input 
                            type={'password'} 
                            placeholder={"Password"}
                            value={formValue.password} 
                            onChange={(e) => setFormValue({...formValue, password:e.target.value})} 
                             />
                        </div>
                    </div>
                    <div className="mt-5">
                        <ButtonPrimary  type={'submit'} options={`w-full `} >
                           <span className="flex gap-2 items-center justify-center">  {loading ? <CgSpinnerTwo size={23} className="animate-spin" /> : 'Login'}</span>
                        </ButtonPrimary>
                    </div>
                </form>
                <p className="text-center mt-5">Create a new account <Link to={'/register'} className="underline">Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;