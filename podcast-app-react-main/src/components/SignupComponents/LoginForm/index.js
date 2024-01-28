import React, { useState } from 'react'
import Button from '../../common/Button';
import InputComponent from '../../common/Input';
import { auth, db } from "../../../firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { setUser } from '../../../slices/userSlice';
import { toast } from 'react-toastify';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading,setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async ()=>{
        console.log("Handling Login...");
        setLoading(true);
        if(email && password){
            try{
                const userCredential = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );
                const user = userCredential.user;
    
                const userDoc = await getDoc(doc(db, "users", user.uid));
                const userData = userDoc.data();
                console.log("userData", userData);
    
                dispatch(
                    setUser({
                        name: userData.name,
                        email: userData.email,
                        uid: userData.uid,
                        profilePic: userData.profilePic,
                    })
                );
                toast.success("Login Successful!")
                setLoading(false);
                navigate("/profile");
            } catch(error){
                console.error("Error signing in:",error)
                setLoading(false);
                toast.error(error.message);
            }
        } else{
            toast.error("Make sure email and password are not empty!");
            setLoading(false);
        }
        
    }

  return (
    <>
        <InputComponent 
            state={email} 
            setState={setEmail} 
            placeholder="Email" 
            type="email" 
            required={true} 

        />
        <InputComponent 
            state={password} 
            setState={setPassword} 
            placeholder="Password" 
            type="password" 
            required={true}                 
        />
        
        <Button text={loading ? "Loading...":"Login"} onClick={handleLogin} disabled={loading} />
    </>
  )
}

export default LoginForm