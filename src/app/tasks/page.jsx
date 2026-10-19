import TasksCard from "@/components/TasksCard";
import { getTasks } from "@/lib/tasks";


const TasksPage = async() => {
    const tasks = await getTasks();
    return (
        <div>
            <h1>Task: {tasks.length}</h1>

            <div className="grid grid-cols-3 gap-6">
                {
                    tasks.map(task => <TasksCard task={task} key={task.id}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;