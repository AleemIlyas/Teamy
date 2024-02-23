import Card from './Card/Card'
import classes from './Team'

const TeamPage = () => {
  const members = [
    { id: 1, name: 'John Doe', designation: 'Software Engineer', tasksCompleted: 75 },
    { id: 2, name: 'Jane Smit', designation: 'UIX REact Designer', tasksCompleted: 60 },
    { id: 3, name: 'John Smith', designation: 'UI/UX user Designer', tasksCompleted: 60 },
    { id: 4, name: 'Jane Smith', designation: 'Mobile App Designer', tasksCompleted: 60 },
    { id: 6, name: 'Jane Smith', designation: 'WebSite Developer', tasksCompleted: 60 },
    { id: 7, name: 'Jane Smith', designation: 'Software Engineer', tasksCompleted: 60 },
    { id: 8, name: 'Jane Smith', designation: 'Software Engineer', tasksCompleted: 60 },
    { id: 9, name: 'Jane Smith', designation: 'Software Engineer', tasksCompleted: 60 },
    // Add more members as needed
  ];

  return (
    <div className="p-4 mt-4 h-3/5 overflow-hidden bg-white">
      <h2 className="text-2xl font-bold">Members</h2>
      <div className={['flex h-full justify-between' , classes.teamCard].join(' ')}>
      <div className="w-2/5 overflow-auto rounded-lg">
        {
          members.map((member) => (
            <Card key={member.id} {...member} />
          ))
        }
      </div>
      <div className="w-2/3 bg-white p-4 rounded-lg ml-4">
        {/* Selected User Profile */}
        <div className="flex items-center mb-4 border-b pb-4">
          <img
            src="https://avatars2.githubusercontent.com/u/5184"
            alt="Profile"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="text-black font-bold">John Smith</p>
            <p className="text-gray-400 text-sm">Software Engineer</p>
          </div>
        </div>

        <div className="border-b mb-4 pb-4">
          <img width={250} src="https://quickchart.io/chart?c=%7B%0A%20%20type%3A%20%27doughnut%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20data%3A%20%5B10%2C%2020%2C%2015%2C%205%2C%2050%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%2099%2C%20132)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%20159%2C%2064)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(255%2C%20205%2C%2086)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(75%2C%20192%2C%20192)%27%2C%0A%20%20%20%20%20%20%20%20%20%20%27rgb(54%2C%20162%2C%20235)%27%2C%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%20%20labels%3A%20%5B%27Red%27%2C%20%27Orange%27%2C%20%27Yellow%27%2C%20%27Green%27%2C%20%27Blue%27%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20plugins%3A%20%7B%0A%20%20%20%20%20%20datalabels%3A%20%7B%0A%20%20%20%20%20%20%20%20formatter%3A%20(value)%20%3D%3E%20%7B%0A%20%20%20%20%20%20%20%20%20%20return%20value%20%2B%20%27%25%27%3B%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D&v=2.9.4&w=500&h=300&bkg=white" alt="" />
        </div>
        
        <div className="flex items-center">
          <div className="w-6 h-6 bg-white rounded-full border border-gray-300 flex items-center justify-center mr-2">
            <span className="text-gray-300">&#x2713;</span>
          </div>
          <div>
            <p className="text-black font-bold">Create A UI Design in React!</p>
            <p className="bg-blue-400 p-1 inline-block rounded-full text-blue-800">Design</p>
          </div>
        </div>
        <div className="flex items-center mt-2">
          <div className="w-6 h-6 bg-white rounded-full border border-gray-300 flex items-center justify-center mr-2">
            <span className="text-gray-300">&#x2713;</span>
          </div>
          <div>
            <p className="text-black font-bold">Update The API endpoints for the App!</p>
            <p className="bg-orange-400 p-1 inline-block rounded-full text-orange-800">Programing</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TeamPage;
