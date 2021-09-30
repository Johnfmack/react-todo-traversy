import Task from './Task'
 

// const tasks = [
//     {
//         id: 1,
//         text: 'Doctor',
//         day: 'Feb 5th at 3:30pm',
//         reminder: true
//     },
//     {
//         id: 2,
//         text: 'School Meeting',
//         day: 'Feb 6th at 1:30pm',
//         reminder: true
//     },
//     {
//         id: 3,
//         text: 'Shopping',
//         day: 'Feb 5th at 4:30pm',
//         reminder: false
//     },
// ] 

const Tasks = ({tasks, onDelete, onToggle}) => {


    return (
        <>
          {tasks.map((task) => {
            return <Task 
                     key={task.id}
                     task={task}
                     onDelete={onDelete}
                     onToggle={onToggle}
                     >
                   </Task>  }
          )}  
        </>
    )
}



export default Tasks
