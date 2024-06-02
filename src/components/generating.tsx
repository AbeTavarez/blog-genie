import { FaRobot } from "react-icons/fa";

export default function Generating() {
  return (
    <div className="flex flex-1 justify-center items-center text-blue-300 animate-pulse">
      <FaRobot size={42} />
      <div className="text-3xl ml-2">Generating...</div>
    </div>
  );
}
