import  { useState } from 'react';
import styles from './SignUp.module.css';
import Teamy from '/homePageImages/Logo.png'
import { signupUser } from '../../Store/reducers/userReducer'
import { useDispatch , useSelector } from 'react-redux';
import Spinner from '../Components/UI/Spinner/Spinner';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const Loading = useSelector((state)=>state.user.isLoading)
  const error = useSelector((state)=>state.user.error)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [picture, setPicture] = useState();
  const [errors, setErrors] = useState({});

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    switch (fieldName) {
      case 'name':
        if (value.trim() === '') {
          newErrors.name = 'Name is required';
        } else {
          delete newErrors.name;
        }
        break;
      case 'email':
        if (value.trim() === '') {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = 'Invalid email address';
        } else {
          delete newErrors.email;
        }
        break;
      case 'password':
        if (value.trim() === '') {
          newErrors.password = 'Password is required';
        } else if (value.length < 6) {
          newErrors.password = 'Password must be at least 6 characters';
        } else {
          delete newErrors.password;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Validate the field
    validateField(name, value);

    // Update the form state
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData() 
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('picture', picture.target.files[0]);
    
    const res = await dispatch(signupUser(formData))
     res.error ? null : navigate('/dashboard')
  };


//   element goes here
     const elementSignUp = ( <div className={['w-screen h-screen flex justify-center items-center', styles.Container].join(' ')}>
      <div className="w-2/5 p-5 flex flex-col justify-center items-center">
      <img src={Teamy} width={250} alt="" />
        <hr className='mt-2 w-11/12 bg-black' style={{'height':'2px'}} />
        { error ? <span className='text-red-700'>{error}</span> : null }
        <form onSubmit={handleSubmit} className="text-left w-3/4 flex flex-col mt-3">
          <label htmlFor="name">Name</label>
          <input
            placeholder="Name"
            required
            type="text"
            name="name"
            className="w-full p-3 rounded-3xl"
            value={name}
            onChange={handleInputChange}
          />
          {errors.name && <span className="text-red-500">{errors.name}</span>}

          <label htmlFor="email">Email</label>
          <input
            placeholder="Email"
            required
            type="text"
            name="email"
            className="w-full p-3 rounded-3xl"
            value={email}
            onChange={handleInputChange}
          />
          {errors.email && <span className="text-red-500">{errors.email}</span>}

          <label htmlFor="password">Password</label>
          <input
            placeholder="Password"
            required
            type="password"
            name="password"
            className="w-full p-3 rounded-3xl"
            value={password}
            onChange={handleInputChange}
          />
          {errors.password && <span className="text-red-500">{errors.password}</span>}
          <div className='mt-6 flex flex-row justify-around'>
          <div className={[ styles.inputdiv].join(' ')}>
            <input required  onChange={(e)=>setPicture(e)} className={styles.input} name="picture" type="file" />
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth="2" fill="none" stroke="currentColor" className={styles.icon}><polyline points="16 16 12 12 8 16"></polyline><line y2="21" x2="12" y1="12" x1="12"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline></svg>
            </div>
            <img className='border-black border h-32' value={picture} src={picture ? URL.createObjectURL(picture.target.files[0]) : "" }  width={120} alt="No Image to Show" />
        </div>
        <div className='w-full flex items-center justify-center'>
          <button type="submit" className="text-center mt-5 p-4 w-2/4 rounded-3xl">
            Sign Up!
          </button>
          </div>
        </form>
        <p className='text-xs font-semibold mt-2'>have an account ? <Link className='text-red-600' to='/login'>LOGIN</Link> </p>
      </div>
    </div> )



  return (
     Loading ?  <Spinner />  :  elementSignUp 
  );
}
