
import React from 'react';

export const DashboardMockup: React.FC = () => {
  return (
    <div className="relative animate-fade-in">
      <div className="bg-gradient-to-br from-lwky-deep-blue to-lwky-blue p-6 rounded-2xl shadow-2xl border border-white/10 relative max-w-md mx-auto">
        {/* Profile section */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-lwky-gold/20 flex items-center justify-center text-lwky-gold font-bold">
              A
            </div>
            <div>
              <h4 className="font-medium">Alina Bird</h4>
              <p className="text-xs text-white/60">alina.bird@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-2">
            <a href="#" className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"></path>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"></path>
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022ZM10 15.5l6-3.5-6-3.5v7Z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        {/* Navigation tabs */}
        <div className="grid grid-cols-4 mb-6">
          <button className="py-3 text-center text-sm border-b-2 border-transparent hover:border-lwky-gold hover:text-lwky-gold transition-colors">
            Profile
          </button>
          <button className="py-3 text-center text-sm border-b-2 border-transparent hover:border-lwky-gold hover:text-lwky-gold transition-colors">
            Engagement
          </button>
          <button className="py-3 text-center text-sm text-lwky-gold border-b-2 border-lwky-gold">
            Income
          </button>
          <button className="py-3 text-center text-sm border-b-2 border-transparent hover:border-lwky-gold hover:text-lwky-gold transition-colors">
            Documents
          </button>
        </div>
        
        {/* Credit card */}
        <div className="bg-gradient-to-r from-lwky-black to-lwky-deep-blue rounded-xl p-4 shadow-lg mb-6 border border-white/20 transform hover:scale-105 transition-transform duration-300">
          <div className="flex justify-between items-start mb-10">
            <div>
              <p className="text-lwky-gold font-semibold">LWKY CARD</p>
              <p className="text-xs text-white/50">Creative Funding</p>
            </div>
            <div className="h-8 w-12 bg-gradient-to-r from-yellow-400 to-lwky-gold rounded-md"></div>
          </div>
          <div className="text-sm text-white/70 mb-2">Available Balance</div>
          <div className="text-2xl font-bold mb-8">KES 2,500,000</div>
          <div className="flex justify-between items-center">
            <div className="text-xs text-white/70">**** **** **** 4926</div>
            <div className="text-xs text-white/70">04/28</div>
          </div>
        </div>
        
        {/* Stats mockup */}
        <div className="rounded-xl bg-lwky-deep-blue/80 border border-white/10 p-4 mb-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Income Breakdown</h3>
            <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">+24%</span>
          </div>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">YouTube</span>
                <span className="text-sm font-medium">KSh 320,000</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-gradient-to-r from-lwky-gold to-yellow-400 rounded-full"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">Instagram</span>
                <span className="text-sm font-medium">KSh 175,000</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-1/2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm">TikTok</span>
                <span className="text-sm font-medium">KSh 95,000</span>
              </div>
              <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Transactions */}
        <div className="rounded-xl bg-lwky-deep-blue/80 border border-white/10 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Recent Transactions</h3>
            <a href="#" className="text-xs text-lwky-gold">View All</a>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Youtube Payout</p>
                  <p className="text-xs text-white/50">Apr 15, 2025</p>
                </div>
              </div>
              <span className="font-medium text-green-400">+KSh 45,000</span>
            </div>
            
            <div className="flex items-center justify-between py-2 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Equipment Purchase</p>
                  <p className="text-xs text-white/50">Apr 12, 2025</p>
                </div>
              </div>
              <span className="font-medium text-red-400">-KSh 35,000</span>
            </div>
            
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Brand Partnership</p>
                  <p className="text-xs text-white/50">Apr 8, 2025</p>
                </div>
              </div>
              <span className="font-medium text-green-400">+KSh 120,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
