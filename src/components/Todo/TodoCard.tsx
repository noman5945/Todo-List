import { useAppDispatch } from "@/redux/hook";
import { EditIcon } from "../icons/EditIcon";
import { TrashBin } from "../icons/TrashBin";
import { Button } from "../ui/button";
import { changeTaskState, removeTask } from "@/redux/features/TodoSlice";

type TodoCardProps = {
  Id: string;
  Title: string;
  Description: string;
  isCompleted?: boolean;
};

export const TodoCard = ({
  Id,
  Title,
  Description,
  isCompleted,
}: TodoCardProps) => {
  const dispatch = useAppDispatch();
  const toggleCompleteStatus = () => {
    dispatch(changeTaskState(Id));
  };
  return (
    <div className=" bg-white flex justify-between items-center rounded-md p-2 border-2">
      <input
        onChange={toggleCompleteStatus}
        type="checkbox"
        name="complete"
        id="complete"
        checked={isCompleted}
      />
      <p>{Title}</p>
      {isCompleted ? (
        <p className=" text-green-500">Complete</p>
      ) : (
        <p className=" text-red-500">Pending</p>
      )}
      <p>{Description}</p>
      <div className=" space-x-5">
        <Button
          onClick={() => dispatch(removeTask(Id))}
          className="bg-red-600 space-x-1"
        >
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
