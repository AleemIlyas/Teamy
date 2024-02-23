import React from 'react'

export default function Card(props) {
  return (
    <div style={{background:'#F7F6F3'}} className='flex p-2 mt-1 mb-1 justify-around items-center rounded-xl'>
        <img width={52} className='rounded-full' src='https://avatars2.githubusercontent.com/u/5184' alt='USER_PROFILE_IMAGE' />
        <div className='flex flex-col'>
            <h2 className='font-bold mb-0 text-xl'>{props.name}</h2>
            <p className='pt-0 font-medium text-xs'>{props.designation}</p>
        </div>
        <div className='flex flex-col justify-evenly'>
            <h2 className='font-bold mb-0 text-xl'>72</h2>
            <p className='pt-0 font-medium text-xs'>{props.tasksCompleted}</p>
        </div>
    </div>
  )
}
