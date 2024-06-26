import { TodoContainer } from "@/components/Todo/TodoContainer";
import { Container } from "@/components/ui/Container";

function Todo() {
  return (
    <div>
      <Container>
        <h1 className=" text-center text-3xl font-semibold my-10">My Todos</h1>
        <TodoContainer />
      </Container>
    </div>
  );
}

export default Todo;
