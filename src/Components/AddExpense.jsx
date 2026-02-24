import { useState } from "react";

const categories = [
  { id: 1, name: "Rent & EMI", color: "text-red-500" },
  { id: 2, name: "Food", color: "text-orange-500" },
  { id: 3, name: "Transport", color: "text-yellow-500" },
  { id: 4, name: "Entertainment", color: "text-lime-500" },
  { id: 5, name: "Savings", color: "text-green-500" },
];

const AddExpense = ({ onClose, onAddExpense }) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [categoryId, setCategoryId] = useState(categories[0].id);
  const [error, setError] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = [];

    // Amount validation
    if (!amount || Number(amount) <= 0) {
      errors.push("Please enter a valid amount");
    }

    // Description validation
    if (!description.trim()) {
      errors.push("Please enter description");
    }

    // If any errors exist
    if (errors.length > 0) {
      setError(errors.join("\n"));
      return;
    }

    const selectedCategory = categories.find((cat) => cat.id === categoryId);

    const newExpense = {
      id: Date.now(),
      amount: Number(amount),
      description,
      date,
      category: selectedCategory,
    };

    if (onAddExpense) {
      onAddExpense(newExpense);
    }

    // Reset form
    setAmount("");
    setDescription("");
    setDate(new Date().toISOString().split("T")[0]);
    setCategoryId(categories[0].id);
    setError("");

    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">
      <div className="bg-[#0f172a] w-[400px] rounded-xl p-6 relative shadow-xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-xl text-white font-semibold mb-6">
          Add New Expense
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Amount */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-white">
              Amount
            </label>
            <input
              type="number"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="placeholder-gray-400 w-full p-2 rounded-lg bg-slate-800 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-white">
              Category
            </label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(Number(e.target.value))}
              className="appearance-none w-full p-2 rounded-lg bg-slate-800 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-white">
              Description
            </label>
            <input
              type="text"
              placeholder="What was this for?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="placeholder-gray-400 w-full p-2 rounded-lg bg-slate-800 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1 text-white">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-2 rounded-lg bg-slate-800 border border-gray-600 text-white focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-emerald-600 py-2 rounded-lg mt-2 text-white font-semibold hover:bg-emerald-700 transition"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddExpense;
