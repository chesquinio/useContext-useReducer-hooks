import { ScaleLoader } from "react-spinners";

export default function Spinner() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <ScaleLoader color="#ffffff" />
    </div>
  );
}
