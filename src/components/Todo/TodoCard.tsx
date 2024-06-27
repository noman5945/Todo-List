import { useAppDispatch } from "@/redux/hook";
import { EditIcon } from "../icons/EditIcon";
import { TrashBin } from "../icons/TrashBin";
import { Button } from "../ui/button";
import { removeTask } from "@/redux/features/TodoSlice";

type TodoCardProps = {
  Id: string;
  Title: string;
  Description: string;
};

export const TodoCard = ({ Id, Title, Description }: TodoCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <div className=" bg-white flex justify-between items-center rounded-md p-2 border-2">
      <input type="checkbox" name="" id="" />
      <p>{Title}</p>
      <p>Time</p>
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
