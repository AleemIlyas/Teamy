
export default function Stats() {
  return (
    <div className="flex justify-end mt-4 pl-4">
      <div className="flex flex-row w-11/12 space-x-7">
        <div className="text-white">
            <h3 className="text-2xl">372</h3>
            <p className="text-xs font-extrabold" style={{'color':'var(--light-color)'}}>Completed Task</p>
        </div>
        <div className="text-white">
            <h3 className="text-2xl">11</h3>
            <p className="text-xs font-extrabold" style={{'color':'var(--light-color)'}}>Open Taks</p>
        </div>
        </div>
    </div>
  )
}
