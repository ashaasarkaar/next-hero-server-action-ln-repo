import { AddTask } from "@/components/AddTask";
import TasksCard from "@/components/TasksCard";
import { CreateATask } from "@/lib/actions";
import { getTasks } from "@/lib/tasks";
import { Button } from "@heroui/react";
import Link from "next/link";


const TasksPage = async() => {
    const tasks = await getTasks();
    return (
        <div>
            <h1 className="pb-5">Task: {tasks.length}</h1>

            <AddTask CreateATask={CreateATask}></AddTask>

            <Link href="/tasks/new">
            <Button variant="danger">Add New Task</Button>
            </Link>

            <div className="grid grid-cols-3 gap-6 pt-5 ">
                {
                    tasks.map(task => <TasksCard task={task} key={task.id}></TasksCard>)
                }
            </div>
        </div>
    );
};

export default TasksPage;