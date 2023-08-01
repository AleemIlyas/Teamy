import styles from './comment.module.css'
import ShowComments from './showComments/showComments'

export default function Comment() {
  return (
    <div className="mt-4 flex flex-col">
        <h1 className="text-xl font-black">Discussion</h1>


        <div className="flex flex-row mt-3 justify-between">
                <img className="w-12 rounded-full mr-2" src="https://avatars2.githubusercontent.com/u/6184" alt="" />
                <input className={["w-11/12 rounded-md" , styles.addComm].join(' ')} type="text" placeholder="Add a comment.." />
        </div>

        <ShowComments />

    </div>
  )
}