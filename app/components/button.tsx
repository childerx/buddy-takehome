import { IoArrowForwardSharp } from "react-icons/io5";

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="font-gilroy-bold flex items-center gap-2 px-4 py-2.5 bg-black text-white rounded-[10px]"
    >
      <span>{title}</span>
      <IoArrowForwardSharp className="" aria-hidden="true" />
    </button>
  );
}
