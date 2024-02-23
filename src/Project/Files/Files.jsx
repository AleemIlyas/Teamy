import { useState } from 'react';
import PDf from '/Projects/pdf-2616.svg'

export default function Files() {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
    <table className="min-w-full">
      <thead className="text-left">
        <tr className="border-b border-gray-200">
          <th className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600">Image</th>
          <th className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600">Name</th>
          <th className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600">Size</th>
          <th className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600">Uploaded By</th>
          <th className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600">Tag</th>
          <th className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600">Date</th>
          <th className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600"></th>
        </tr>
      </thead>
      <tbody className="">
      <tr className="border-b border-gray-200">
          <td className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600"><img src={PDf} width={45} alt="" /></td>
          <td className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600">Redesign Brief 2022.pdf</td>
          <td className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600">159 KB</td>
          <td className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600"><img className="rounded-full inline-block"  src="	https://avatars2.githubusercontent.com/u/6181" width={30} alt="" /> Ali Ahmad </td>
          <td className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600">Marketing</td>
          <td className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600">07 July 2023</td>
          <td className="bg-gray-100 font-bold text-sm text-gray-600">
          <div className="relative inline-block text-left">
         <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-gray-300 flex text-gray-700 py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 relative"
        >
            Actions
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block ml-2 transform duration-300 ease-in-out transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ transform: isHovered ? 'rotate(180deg)' : 'rotate(0)' }}
             >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
            </svg>
        </button>
        {/* {isHovered && (
        <div className="absolute bottom-0 top-9 bg-white border border-gray-200 shadow-md rounded-md">
          <button className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100">
            Download
          </button>
        </div>
      )} */}
    </div>
          </td>
        </tr>


    <tr className="border-b border-gray-200">
          <td className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600"><img src={PDf} width={45} alt="" /></td>
          <td className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600">Redesign Brief 2022.pdf</td>
          <td className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600">159 KB</td>
          <td className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600"><img className="rounded-full inline-block"  src="	https://avatars2.githubusercontent.com/u/6181" width={30} alt="" /> Ali Ahmad </td>
          <td className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600">Marketing</td>
          <td className="py-4 px-6 bg-gray-100 font-bold text-sm text-gray-600">07 July 2023</td>
          <td className="bg-gray-100 font-bold text-sm text-gray-600">
          <div className="relative inline-block text-left">
         <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-gray-300 flex text-gray-700 py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 relative"
        >
            Actions
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block ml-2 transform duration-300 ease-in-out transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                style={{ transform: isHovered ? 'rotate(180deg)' : 'rotate(0)' }}
             >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
            />
            </svg>
        </button>
        {/* {isHovered && (
        <div className="absolute bottom-0 top-9 bg-white border border-gray-200 shadow-md rounded-md">
          <button className="block w-full px-4 py-2 text-gray-800 hover:bg-gray-100">
            Download
          </button>
        </div>
      )} */}
    </div>
          </td>
        </tr>

      </tbody>
    </table>
  </div>
  )
}
