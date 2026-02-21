import { iconMap } from "../images/index";

const BudgetCard = ({ title, amount, description, icon }) => {
  return (
    <div className="flex flex-1 flex-row border border-gray-400 bg-emerald-600/5 rounded-xl mt-10 p-5 justify-between items-center">
      <div className="flex flex-col">
        <span className="text-gray-400 font-medium">{title}</span>
        <span className="text-white text-2xl mt-3 font-bold">{amount}</span>
        <span className="text-gray-400 font-medium">{description}</span>
      </div>
      <div className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center overflow-hidden">
        <img
          src={iconMap[icon]}
          alt={icon}
          className="w-6 h-6 object-contain"
        />
      </div>
    </div>
  );
};

export default BudgetCard;
