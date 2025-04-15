import { Button } from "../components/ui/button/Button";

export const StyleGuide = () => {
  return (
    <>
      <Button className="primary">Add Task</Button>
      <br />
      <Button className="secondary">Remove Task</Button>
      <br />
      <Button className="disabled">Remove Task</Button>
      <br />
    </>
  );
};
