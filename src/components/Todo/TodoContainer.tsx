import { useAppSelector } from "@/redux/hook";
import { AddTodoModal } from "./AddTodoModal";
import { TodoCard } from "./TodoCard";
import { TodoDropDown } from "./TodoDropDown";

export const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todo);

  return (
    <div>
      <div className=" flex justify-between py-2">
        <AddTodoModal />
        <TodoDropDown />
      </div>
      <div className=" bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        {todos.length < 1 ? (
          <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
            <p>There are no tasks pending</p>
          </div>
        ) : (
          <div className="bg-white w-full h-full p-5 rounded-lg space-y-3">
            {todos.map((task) => {
              return (
                <TodoCard
                  key={task.ID}
                  Id={task.ID}
                  Title={task.Title}
                  Description={task.Description}
                  isCompleted={task.isCompleted}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
