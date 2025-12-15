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
    <section className="bg-[#f5f6fb] py-20">
      <h2 className="text-center font-extrabold text-[clamp(28px,4vw,48px)]">
        RATES BECOME MORE FAVORABLE <br /> WITH EACH GRADE
      </h2>
      <p className="mt-3 text-center text-[clamp(16px,2vw,22px)]">
        Spend more — pay less
      </p>

      {/* Desktop */}
      <div className="hidden md:flex justify-center mt-16 gap-6">
        {DATA.map((c) => (
          <Card key={c.tier} {...c} />
        ))}
      </div>

      {/* Mobile — EXACT SAME TABLE */}
      <div className="md:hidden mt-10 px-4">
        <div className="rounded-xl overflow-hidden border bg-white">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left">Card</th>
                <th className="px-4 py-3 text-left">Spend</th>
                <th className="px-4 py-3 text-right">Fee</th>
              </tr>
            </thead>
            <tbody>
              {DATA.map((r) => (
                <tr key={r.tier} className="border-t">
                  <td className="px-4 py-3 font-medium">{r.tier}</td>
                  <td className="px-4 py-3">{r.spend}</td>
                  <td className="px-4 py-3 text-right font-bold">{r.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Cards;
