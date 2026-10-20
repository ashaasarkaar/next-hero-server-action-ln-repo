import { AddTask } from "@/components/AddTask";
import TasksCard from "@/components/TasksCard";
import { CreateATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";


const TasksPage = async() => {
    const tasks = await getTasks();
    return (
        <div>
            <h1 className="pb-5">Task: {tasks.length}</h1>

            <AddTask CreateATask={CreateATask}></AddTask>

            <div className="grid grid-cols-3 gap-6 pt-5 ">
                {
                    tasks.map(task => <TasksCard task={task} key={task.id}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;