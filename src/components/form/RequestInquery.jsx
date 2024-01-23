import ButtonPrimary from "../buttons/ButtonPrimary";
import Input from "../input/Input";


const RequestInquery = () => {
    return (
        <>
            <form  className="space-y-5 mt-6">
                <Input type={'text'} placeholder={"Full name"} />
                <Input type={'number'} placeholder={"Phone"} />
                <Input type={'email'} placeholder={"Email"} />
                <textarea name="" id="" cols="30" rows="3" placeholder="Message" className='py-2 w-full outline-none border px-3 rounded focus-visible:border-primary transition-all '></textarea>
                <ButtonPrimary type={'button'} options={'w-full py-3'}>
                    <span>Submit Request</span>
                </ButtonPrimary>
            </form>
        </>
    );
};

export default RequestInquery;