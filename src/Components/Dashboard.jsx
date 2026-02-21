import BudgetCard from "./BudgetCard";

const budgetCards = [
  {
    title: "Total Spend",
    amount: "$150",
    description: "Across all categories",
    icon: "rupee",
  },
  {
    title: "Total Budget",
    amount: "$2350",
    description: "Monthly allocation",
    icon: "wallet",
  },
  {
    title: "Remaining Budget",
    amount: "$2200",
    description: "Available to spend",
    icon: "coins",
  },
];

const Dashboard = () => {
  return (
    <div className="mx-30 mt-20">
      <header className="flex flex-row items-center justify-between ">
        <div className="flex flex-col">
          <span className="text-white text-3xl font-bold">Dashboard</span>
          <span className="text-gray-400 text-xl">
            Your financial overview at a glance.
          </span>
        </div>
        <button className="bg-emerald-600 hover:shadow-lg shadow-emerald-600/30 hover:py-2 hover:px-7 hover:duration-400 not-hover:duration-400 text-white  py-1.5 px-6 rounded-2xl border-white border">
          Add Expenses
        </button>
      </header>
      <main className="flex flex-col">
        <div className="flex flex-1 justify-between space-x-2">
          {
            /* Budget Cards */
            budgetCards.map((card, index) => (
              <BudgetCard
                key={index}
                title={card.title}
                amount={card.amount}
                description={card.description}
                icon={card.icon}
              />
            ))
          }
        </div>

        {/* Budget Status */}
        <div className="flex flex-row justify-between mt-15">
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl  mb-3">
              Budget Status
            </span>
            <div>Hello</div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl mb-3">
              Spending Breakdown
            </span>
            <div className="flex flex-col items-center justify-center w-96 h-96 bg-emerald-600/5 rounded-xl border border-gray-400 ">
              {/* Placeholder for spending breakdown chart */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
