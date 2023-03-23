import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const setPage = () => {
        if (user[0].email === email && user[0].password === password) {
            localStorage.setItem('userDetails', JSON.stringify(user[0]));
            navigate("/dashboard")
        }

        else if (user[1].email === email && user[1].password === password) {
            localStorage.setItem('userDetails', JSON.stringify(user[1]));
            navigate("/admindashboard/mda")
        }
    }

    return (
        <div className="flex justify-center items-center w-full h-[100vh]">
            <div className="md:w-[500px] w-[100vw] p-5 md:h-[500px] flex flex-col">
                <h4 className="font-[600] text-[25px] text-center md:text-[40px] leading-[0.1em] font-montserrat my-[20px] mb-[60px] md:mt-10">FGNIEP</h4>
                <label htmlFor="email" className="font-medium md:font-semibold">Email:</label>
                <input className="md:w-full outline-none border-2 rounded-md border-primary  p-3" type="text" name="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />

                <label htmlFor="password" className="font-medium md:font-semibold md:mt-5 mt-3">Password:</label>
                <input className="md:w-full outline-none rounded-md p-3 border-2 border-primary" type="password" name="password" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />

                <input value="LOGIN" className="text-center md:mt-20 mt-12 rounded-full text-[20px] bg-primary py-[15px] px-[20px] font-[500] cursor-pointer text-white" onClick={() => setPage()} type="submit" />
            </div>
        </div>
    );
}

export default LoginPage;