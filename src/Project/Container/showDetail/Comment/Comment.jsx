import { useState } from 'react';
import styles from './comment.module.css'
import ShowComments from './showComments/showComments'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toaster } from 'evergreen-ui';

export default function Comment() {
  const { taskId } = useParams()
  const [commentText, setCommentText] = useState('');
  const [error, setError] = useState('');

  const handleCommentChange = (event) => {
    const newText = event.target.value;
    setCommentText(newText);

    if (newText.length < 70) {
      setError('Comment must be at least 70 characters long');
    } else {
      setError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (commentText.length >= 70) {
      const data = {
        title : commentText
      }
      axios.post(`http://localhost:3300/addComment/${taskId}`, data ,  {
        withCredentials : true
      })
      .then(res=>{
        toaster.notify('Comment Added Successfully!')
      })
      .catch(err=>{
        toaster.danger(err.message)
      })
      setCommentText('');
      setError('');
    } else {
      setError('Comment must be at least 70 characters long');
    }
  };



  return (
    <div className="mt-4 flex flex-col">
        <h1 className="text-xl font-black">Discussion</h1>


     <form className="flex flex-row mt-3 justify-between" onSubmit={handleSubmit}>
      <img className="w-12 rounded-full mr-2" src="https://avatars2.githubusercontent.com/u/6184" alt="" />
      <input
        className={["w-11/12 rounded-md", styles.addComm].join(' ')}
        type="text"
        placeholder="Add a comment.."
        value={commentText}
        onChange={handleCommentChange}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2" type="submit">Add</button>
    </form>
    {error && <p className="text-red-500">{error}</p>}


        <ShowComments />

    </div>
  )
}