import wallet from '../images/wallet.png'

const Dashboard = () => {
  return (
    <div className='bg-[rgb(12,18,33)] flex w-screen h-screen'>
      
      {/* Sidebar */}
      <div className='flex flex-col px-8 py-5 pr-20 border-r border-gray-700'>
        
        {/* Header */}
        <header className='mb-10 pb-4 border-b border-gray-700 flex items-center'>
          <div className='flex w-10 h-10 rounded-xl shadow-lg shadow-white/15'>
            <img src={wallet} alt="Wallet logo" className="w-full h-full object-contain" />
          </div>

          <div className='flex flex-col ml-3'>
            <span className='text-white font-bold text-2xl'>
              WealthWise
            </span>
            <span className='text-gray-400 text-sm'>
              Expense Manager
            </span>
          </div>
        </header>

        {/* Main Content */}
        <main className='flex-1 text-white'>
          Sidebar Content
        </main>

        {/* Footer */}
        <footer className='text-gray-400 text-sm mt-6'>
          © 2026 WealthWise
        </footer>
      </div>

      {/* Main Area */}
      <div className='flex-1 p-10 text-white'>
        Hello
      </div>

    </div>
  )
}

export default Dashboard