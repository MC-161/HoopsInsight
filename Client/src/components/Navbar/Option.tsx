import { OptionProps } from "@/types/Navbar/NavbarTypes";

const Option:React.FC<OptionProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="option p-2 h-fit hover:bg-neutral-700 cursor-pointer rounded-md flex flex-col justify-center">
      <div className="flex items-center">
        <Icon className="p-1" />
        <p className="optionTitle text-xs">{title}</p>
      </div>
      <p className="optionDesc pl-6 text-[10px]">{description}</p>
    </div>
  );
};

export default Option;
