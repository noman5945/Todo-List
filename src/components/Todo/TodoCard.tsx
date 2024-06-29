import { useAppDispatch } from "@/redux/hook";
import { EditIcon } from "../icons/EditIcon";
import { TrashBin } from "../icons/TrashBin";
import { Button } from "../ui/button";
import { changeTaskState } from "@/redux/features/TodoSlice";
import { useDeleteTodoMutation } from "@/redux/API/API";

type TodoCardProps = {
  Id: string;
  Title: string;
  Description: string;
  isCompleted?: boolean;
  priority: string;
};

export const TodoCard = ({
  Id,
  Title,
  Description,
  isCompleted,
  priority,
}: TodoCardProps) => {
  const dispatch = useAppDispatch();
  const [deleteTodo, { isError, isSuccess, isLoading }] =
    useDeleteTodoMutation();
  const toggleCompleteStatus = () => {
    dispatch(changeTaskState(Id));
  };
  console.log({ isError, isLoading, isSuccess });
  return (
    <div className=" bg-white flex justify-between items-center rounded-md p-2 border-2">
      <input
        onChange={toggleCompleteStatus}
        type="checkbox"
        name="complete"
        id="complete"
        checked={isCompleted}
      />
      <div className=" mr-3 font-bold flex-1">
        {" "}
        <p>{Title}</p>
      </div>
      <div className="flex flex-1 items-center gap-2">
        <div
          className={`size-2  rounded-full ${
            priority === "high" ? "bg-red-700" : null
          } ${priority === "medium" ? " bg-yellow-500" : null} ${
            priority === "low" ? "  bg-green-600" : null
          }`}
        ></div>
        <p className=" font-semibold">{priority}</p>
      </div>
      <div className=" flex-1">
        {isCompleted ? (
          <p className=" text-green-500">Complete</p>
        ) : (
          <p className=" text-red-500">Pending</p>
        )}
      </div>
      <p className=" flex-[2]">{Description}</p>
      <div className=" space-x-5">
        <Button onClick={() => deleteTodo(Id)} className="bg-red-600 space-x-1">
          {" "}
          <TrashBin /> Delete
        </Button>
        <Button className="bg-[#5C53FE] space-x-1">
          <EditIcon /> Edit
        </Button>
      </div>
    </div>
  );
};
