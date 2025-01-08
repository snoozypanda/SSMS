import { FaAngleDown } from "react-icons/fa";

const DropdownMenu = ({ ...props }) => {
  return (
    <div className="relative">
      <div
        onClick={props.handleMenuClicked}
        className="z-10 relative px-4 py-1 text-xl font-semibold flex items-center gap-3 bg-custom-color-blue-900 w-fit hover:text-gray-300 cursor-pointer transition_css"
      >
        <span>{props.name}</span>{" "}
        <FaAngleDown
          size={25}
          className={`${
            props.menuClicked ? `rotate-180` : `rotate-0`
          } transition-transform`}
        />
      </div>

      <div
        className={`bg-custom-color-blue-900 w-fit py-3 my-1 rounded-lg course-list ${
          props.menuClicked ? `course-list-clicked` : `course-list`
        }`}
      >
        {props.menuList.map((menu) => (
          <div
            key={menu.id}
            className="px-5 py-1 hover:bg-white hover:bg-opacity-25 cursor-pointer transition_css hover:text-green-400"
          >
            {menu.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
