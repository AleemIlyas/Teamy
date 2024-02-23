
export default function MyTask() {
    const myTasks = [
        {
            name : 'Create a UI app' ,
            completed : false,
            id:1
        },
        {
            name : 'Redesign the Mobile App' ,
            completed : false,
            id:2
        },{
            name : 'Update the API endpoints',
            completed : false,
            id:3
        }
    ]
  return (
    <div className='w-11/12 p-3 m-auto'>
        <h1 className="font-bold text-3xl">My Tasks</h1>
        { myTasks.map((data)=>{
            return  <div className="p-5 m-3 flex bg-white"key={data.id}>
                <div className="w-6 h-6 bg-white rounded-full border border-gray-300 flex items-center justify-center mr-2">
            <span className="text-gray-300">&#x2713;</span>
                </div>
                <h1 className="font-bold">{data.name}</h1>
            </div>
        }) }
    </div>
  )
}
