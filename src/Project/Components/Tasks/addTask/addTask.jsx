import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import  PropTypes  from 'prop-types'
import { useParams } from "react-router-dom";
import axios from "axios";
import  { toaster } from "evergreen-ui";

let initialFormState = {
  title: "",
  description: "",
  assigned: "",
  due: "",
  tag: "",
};

const AddTask = (props) => {
  const {id} = useParams()
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  useEffect(()=>{
    return ()=>{initialFormState={
      title: "",
      description: "",
      assigned: "",
      due: "",
      tag: "",
    }}
  } , [])


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate on change
    setErrors({
      ...errors,
      [name]: value.trim() === "" ? "Field is required" : "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiEndPoint = props.todo ? 'addTask' : 'addBackLog'
    console.log(id)
    // Here, you can perform further actions, such as submitting the form to the server.
    // For this example, we'll just display the form data in the console.
    axios.post(`http://localhost:3300/${apiEndPoint}/${id}` , formData ,{
      withCredentials : true
    })
    .then(res=>{
      toaster.success(res.data.message)
      props.handler()
    })
    .catch(err=>{
      toaster.danger(err)
      props.handler()
    })
  };

  return (
    <div>
        <div className="flex items-center justify-between pl-3 pr-3">
            <h1 className="text-2xl font-semibold">Add a New Task</h1>
            <RxCross1 className='text-xl hover:cursor-pointer' onClick={props.handler} />
        </div>  
        <hr className='mt-3' style={{borderWidth : '1px'}} />
        <form onSubmit={handleSubmit}>
      <div className='flex flex-col mt-5'>
        <label htmlFor="title">Title</label>
        <input
        className='p-3 rounded-lg outline-none'
        style={{background:'#EAEAEA' , color:'#131313'}}
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        {errors.title && <span className="text-red-600 text-center">{errors.title}</span>}
      </div>
      <div className='flex flex-col mt-5'>
        <label htmlFor="description">Description</label>
        <input
        className='p-3 rounded-lg outline-none'
        style={{background:'#EAEAEA' , color:'#131313'}}
          type="text"
          id="description"
          name="description"
          value={formData.description}
          minLength={200}
          onChange={handleChange}
        />
        {errors.description && <span  className="text-red-600 text-center">{errors.description}</span>}
      </div>
      <div className='flex flex-col mt-5'>
        <label htmlFor="assigned">Assign To</label>
        <input
        className='p-3 rounded-lg outline-none'
        style={{background:'#EAEAEA' , color:'#131313'}}
          type="text"
          id="assigned"
          name="assigned"
          value={formData.assigned}
          onChange={handleChange}
        />
        {errors.assigned && <span  className="text-red-600 text-center">{errors.assigned}</span>}
      </div>
      <div className='flex flex-col mt-5'>
        <label htmlFor="due">Due</label>
        <input
        className='p-3 rounded-lg outline-none'
        style={{background:'#EAEAEA' , color:'#131313'}}
          type="date"
          id="due"
          name="due"
          value={formData.due}
          onChange={handleChange}
        />
        {errors.due && <span  className="text-red-600 text-center">{errors.due}</span>}
      </div>
      <div className='flex flex-col mt-5'>
        <label htmlFor="tag">Tag</label>
        <input
        className='p-3 rounded-lg outline-none'
        style={{background:'#EAEAEA' , color:'#131313'}}
          type="text"
          id="tag"
          name="tag"
          value={formData.tag}
          onChange={handleChange}
        />
        {errors.tag && <span className="text-red-600 text-center">{errors.tag}</span>}
      </div>
      <button disabled={Object.keys(errors).length === 0 ? true : false} className='w-full bg-green-200 text-black font-bold p-4 rounded-full mt-3' type="submit">Add Task</button>
    </form>
    </div>
  );
};


AddTask.propTypes = {
  handler : PropTypes.func,
  todo : PropTypes.bool
}

export default AddTask;
