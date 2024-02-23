import { useState } from 'react';
import { RxCross1  } from 'react-icons/rx'
import PropTypes from 'prop-types'
import axios from 'axios';
import Spinner from '../../../Components/UI/Spinner/Spinner'
import { toaster } from 'evergreen-ui';
import { getProjects } from '../../../../Store/reducers/projectReducer'
import { useDispatch } from 'react-redux';
 
export default function AddProject(props) {
    const dispatch = useDispatch()
    const [projectName, setProjectName] = useState('');
    const [error, setError] = useState('');
    const [loading,setLoading] = useState(false)


    const handleInputChange = (e) => {
        const { value } = e.target;
        setProjectName(value);
        setError(value.trim() === '' ? 'Project name cannot be empty.' : '');
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!projectName.trim()) {
          setError('Project name cannot be empty.');
        } else {
            const data = {
                'title' : projectName
            }
            setLoading(true)
          // Do something with the project name, like submitting it to a server or performing other actions.
          axios.post('http://localhost:3300/addProject' , data,{
            withCredentials : true
          })
          .then(res=>{
            console.log(res)
            setLoading(false)
            toaster.success('Project Created Successfully!')
            props.handler()
            dispatch(getProjects())
          })
          .catch(err=>{
            setLoading(false)
            toaster.notify(err)
          })
        }
      };


  return (
    !loading ?
    <div>
        <div className="flex items-center justify-between pl-3 pr-3">
            <h1 className="text-2xl font-semibold">Add a New Project</h1>
            <RxCross1 className='text-xl hover:cursor-pointer' onClick={props.handler} />
        </div>  
        <hr className='mt-3' style={{borderWidth : '1px'}} />
        <form onSubmit={handleSubmit}>
      <div className='flex flex-col mt-5'>
        <label htmlFor="title">Name:</label>
        <input
          className='p-3 rounded-lg outline-none'
          style={{background:'#EAEAEA' , color:'#131313'}}
          type="text"
          id="title"
          value={projectName}
          onChange={handleInputChange}
        />
      </div>
      {error && <p className="error text-center text-red-700">{error}</p>}
      <button className='w-full bg-green-200 text-black font-bold p-4 rounded-full mt-3' type="submit">Create Project</button>
    </form>
    </div> : <Spinner />
  ) 
}


AddProject.propTypes = {
    handler: PropTypes.func
}