import { useState } from "react";

const AddCategory = ({ onClose }) => {
  const [categoryName, setCategoryName] = useState("");
  const [monthlyBudgetValue, setMonthlyBudgetValue] = useState(0);
  const [colorCode, setColorCode] = useState("#ff0000");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      {/* Modal Box */}
      <div className="bg-[#0f172a] w-[400px] rounded-xl p-6 relative shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-xl text-white font-semibold mb-6">
          Create Category
        </h2>
        <form onSubmit={handleSubmit()}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-white">
              Name
            </label>
            <input
              type="text"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
              placeholder="e.g. Groceries"
              className="placeholder-gray-400 w-full p-2 rounded-lg bg-slate-800 border border-gray-600 text-white"
            />
          </div>

          {/* Budget */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-white">
              Monthly Budget
            </label>
            <input
              type="number"
              value={monthlyBudgetValue}
              onChange={(e) => setMonthlyBudgetValue(e.target.value)}
              className="w-full p-2 rounded-lg bg-slate-800 border border-gray-600 text-white"
            />
          </div>

          {/* Color */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2 text-white">
              Color
            </label>

            <div className="flex items-center gap-3">
              {/* Color Picker */}
              <input
                type="color"
                value={colorCode}
                onChange={(e) => setColorCode(e.target.value)}
                className="h-12 w-12 rounded-lg border border-gray-600 bg-slate-800 p-1 cursor-pointer"
              />

              {/* Hex Code Input */}
              <input
                type="text"
                value={colorCode}
                onChange={(e) => setColorCode(e.target.value)}
                className="flex-1 p-2 rounded-lg bg-slate-800 border border-gray-600 text-white"
              />
            </div>
          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 border border-white py-2 rounded-lg mt-8 text-white font-semibold hover:bg-emerald-700 transition"
          >
            Save Category
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
