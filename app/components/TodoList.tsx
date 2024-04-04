import React from 'react';
import { ITask } from "@/types/tasks";
import Task from './Task'; // Import the Task component

interface TodoListProps {
  tasks: ITask[]
}

const TodoList: React.FC<TodoListProps> = ({ tasks })=> {
  console.log(tasks)
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Actions</th> {/* Changed "Favorite Color" to "Text" */}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <Task key ={task.id}task={task}/>
            
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
