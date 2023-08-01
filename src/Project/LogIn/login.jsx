import { useState } from 'react';
import styles from './login.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Teamy from '/homePageImages/Logo.png';
import { loginUser } from '../../Store/reducers/userReducer'
import { useSelector , useDispatch } from 'react-redux';
import Spinner from '../Components/UI/Spinner/Spinner';


export default function Login() {
  const error = useSelector((state)=>state.user.error)
  const Loading = useSelector((state)=>state.user.isLoading)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const validateField = (fieldName, value) => {
    const newErrors = { ...errors };

    switch (fieldName) {
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
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Submit the form if there are no errors
    const formData = new FormData(event.target) 
    const res =  await dispatch(loginUser(Object.fromEntries(formData)))
    console.log(res)
     res.error ? null :  navigate('/dashboard')
  };


  //  Login Element
  const loginElement = (
    <div className="w-2/5 p-5 flex flex-col justify-center items-center">
        <img src={Teamy} width={250} alt="" />
        <hr className='mt-2 w-11/12 bg-black' style={{ 'height': '2px' }} />
        { error ? <span className='text-red-700'>{error}</span> : null }
        <form onSubmit={handleSubmit} className="text-left w-3/4 flex flex-col mt-3">
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

          <button type="submit" className="mt-5 p-4 w-2/5 m-auto rounded-3xl">LOG IN!</button>

        </form>
        <p className='text-xs font-semibold mt-2'>
            Create an account? <Link className='text-red-600' to='/signup'>Sign up!</Link>
          </p>
      </div>
  )


  return (
    <div className={['w-screen h-screen flex justify-center items-center', styles.Container].join(' ')}>
      { Loading ? <Spinner /> : loginElement }
    </div>
  );
}
