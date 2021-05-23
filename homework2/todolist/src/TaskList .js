import react, { Component } from 'react';
import Task from './Task'
import CreateTaskInput from './CreateTaskInput';

//список  
class TaskList extends Component {
    state = {
        tasks: [
            { text: "buy milk", done: false, id: 1 },
            { text: "buy bread", done: false, id: 1 },
            { text: "buy meat", done: false, id: 1 },
            { text: "buy cigars", done: false, id: 1 }
        ],
    }

    onCreate = text => {
        const {tasks } = this.state;
        const newTask = {
            id: Math.random(),
            text,
            done: false,

        }
        const updateTasks = tasks.concat(newTask);
        this.setState({
            tasks: updateTasks
        })

    }

    handleTaskStatusChange = (id) => {
        //1. Find task in a list
        //2. Toggle done value
        //3. Save updated list

        // // неправильно бо буде мотувати
        // const task = this.state.tasks.find(task => 
        //     task.id=== id);
        //     task.done = !task.done;

        const updatedTasks = this.state.tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done
                }
            }
            return task;
        });
        this.setState({ tasks:  updatedTasks })

    } 
    handleTaskDelete = (id) => {

        const filterTask = this.state.tasks
        .filter(task => task.id !== id)
        this.setState({tasks: filterTask})
    }

    render() {
        const sortedList = this.state.tasks
        .slice()
        .sort((a, b) => a.done - b.done);

        return (
            <div className="todo-list">
                <CreateTaskInput onCreate={this.onCreate}/>
                <ul className='list'>
                    {sortedList.map(task => (
                        <Task  key={task.id}
                        // id={task.id} done={task.done} text={task.text}
                        {...task}
                        onChange={this.handleTaskStatusChange}
                        onDelete={this.handleTaskDelete}
                         />
                    ))}
                </ul>
            </div>
        )
    }

}

export default TaskList;

