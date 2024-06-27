import { AddTodoModal } from "./AddTodoModal";
import { TodoCard } from "./TodoCard";
import { TodoDropDown } from "./TodoDropDown";

export const TodoContainer = () => {
  return (
    <div>
      <div className=" flex justify-between py-2">
        <AddTodoModal />
        <TodoDropDown />
      </div>
      <div className=" bg-primary-gradient w-full h-full rounded-xl p-[5px] ">
        {/* <div className="bg-white text-2xl font-bold p-5 flex justify-center items-center rounded-md">
          <p>There is no tasks pending</p>
        </div> */}
        <div className="bg-white w-full h-full p-5 rounded-lg space-y-3">
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};
