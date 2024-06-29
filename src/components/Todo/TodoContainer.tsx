//import { useAppSelector } from "@/redux/hook";
import { AddTodoModal } from "./AddTodoModal";
import { TodoCard } from "./TodoCard";
import { TodoDropDown } from "./TodoDropDown";
import { useGetTodosQuery } from "@/redux/API/API";

export const TodoContainer = () => {
  //Get Data locally
  //const { todos } = useAppSelector((state) => state.todo);
  /**
   * Get data from Database
   */
  const { data: todo, isError, isLoading } = useGetTodosQuery(undefined);
  if (isLoading) {
    return <p>Loading....</p>;
  }
  if (isError) {
    return (
      <p className=" text-red-600 flex justify-between text-center">
        Error Occured
      </p>
    );
  }
  console.log(todo);
  return (
    <div>
      <div className=" flex justify-between py-2">
        <AddTodoModal />
        <TodoDropDown />
      </div>
      <div className=" bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        {todo?.data?.length < 1 ? (
          <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
            <p>There are no tasks pending</p>
          </div>
        ) : (
          <div className="bg-white w-full h-full p-5 rounded-lg space-y-3">
            {todo?.data?.map((task: any) => {
              return (
                <TodoCard
                  key={task.ID}
                  Id={task.ID}
                  Title={task.Title}
                  Description={task.Description}
                  isCompleted={task.isCompleted}
                  priority={task.priority}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
