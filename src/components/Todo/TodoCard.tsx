import { EditIcon } from "../icons/EditIcon";
import { TrashBin } from "../icons/TrashBin";
import { Button } from "../ui/button";

export const TodoCard = () => {
  return (
    <div className=" bg-white flex justify-between items-center rounded-md p-2 border-2">
      <input type="checkbox" name="" id="" />
      <p>Todo Title</p>
      <p>Time</p>
      <p>description</p>
      <div className=" space-x-5">
        <Button className="bg-red-600 space-x-1">
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
