import Card from "../common/Card";

const DATA = [
  {
    tier: "Standard",
    spend: "up to $1 000",
    fee: "6.7%",
    gradient: "linear-gradient(135deg,#f5f7ff,#e6ecff)",
  },
  {
    tier: "Silver",
    spend: "from $1 000",
    fee: "6%",
    gradient: "linear-gradient(135deg,#f0f0f0,#d9d9d9)",
  },
  {
    tier: "Gold",
    spend: "from $10 000",
    fee: "5%",
    gradient: "linear-gradient(135deg,#ffd1a1,#ff9f5a)",
  },
  {
    tier: "Platinum",
    spend: "from $50 000",
    fee: "4%",
    gradient: "linear-gradient(135deg,#d4d7dc,#aeb3ba)",
  },
  {
    tier: "Black",
    spend: "from $100 000",
    fee: "3%",
    gradient: "linear-gradient(135deg,#2b1f1a,#000)",
    textColor: "#fff",
  },
];

const Cards: React.FC = () => {
  return (
    <section className="bg-[#f5f6fb] py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-center font-sans font-black text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight">
          RATES BECOME MORE FAVORABLE <br className="hidden sm:block" /> WITH EACH GRADE
        </h2>
        <p className="mt-2 sm:mt-3 text-center text-sm sm:text-base md:text-[15px] text-gray-600">
          Spend more — pay less
        </p>

        {/* Desktop */}
        <div className="hidden md:flex justify-center mt-12 md:mt-16 gap-4 lg:gap-6">
          {DATA.map((c) => (
            <Card key={c.tier} {...c} />
          ))}
        </div>

        {/* Mobile — Table view */}
        <div className="md:hidden mt-8 sm:mt-10">
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Card</th>
                  <th className="px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm font-semibold text-gray-700">Spend</th>
                  <th className="px-3 sm:px-4 py-2.5 sm:py-3 text-right text-xs sm:text-sm font-semibold text-gray-700">Fee</th>
                </tr>
              </thead>
              <tbody>
                {DATA.map((r) => (
                  <tr key={r.tier} className="border-t border-gray-200 hover:bg-gray-50 transition-colors">
                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 font-medium text-xs sm:text-sm">{r.tier}</td>
                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm text-gray-600">{r.spend}</td>
                    <td className="px-3 sm:px-4 py-2.5 sm:py-3 text-right font-bold text-xs sm:text-sm">{r.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
