import {useState, type FC} from 'react';
import { Link, Outlet } from 'react-router-dom';
import TrHistory from '../components/Transaction/TrHistory';

type Props = object

const Transaction: FC<Props> = () => {

    const [subTitle, setSubTitle] = useState<string>('Transaction history');
    const [transactionHistory, setTransactionHistory] = useState<boolean>(true);
    const [createStatement, setCreateStatement] = useState<boolean>(false);
    const [readyStatement, setReadyStatement] = useState<boolean>(false);

    //Management of the states
    const handleChange = (state:number) =>{
        if(state === 1){
            setTransactionHistory(true);
            setCreateStatement(false);
            setReadyStatement(false);
            setSubTitle('Transaction history');
        }else if(state === 2){
            setTransactionHistory(false);
            setCreateStatement(true);
            setReadyStatement(false);
            setSubTitle('Create Statement');
        }else if(state === 3){
            setTransactionHistory(false);
            setCreateStatement(false);
            setReadyStatement(true);
            setSubTitle('Ready Statements');
        }
    }

return <>

    {/* The first part! Search box! */}
    <div className='flex flex-row flex-1 pl-[30px] mt-[28px] justify-between'>
        <div>
            <h1 className='text-4xl font-semibold'>{subTitle}</h1>
        </div>
        <div className='flex flex-row'>
            <Link to = "/history"><button  className={`p-5 text-lg font-semibold  ${transactionHistory ? "text-black border-b-blue-600 border-b-3" : "text-gray-400"}`} onClick={()=>handleChange(1)}>Transaction history</button></Link>
            <Link to = "scheduled"><button  className={`p-5 text-lg font-semibold ${createStatement ? "text-black border-b-blue-600 border-b-3" : "text-gray-400"}`} onClick={()=>handleChange(2)}>Create Statement</button></Link>
            <Link to = "reported"><button  className={`p-5 text-lg font-semibold ${readyStatement ? "text-black border-b-blue-600 border-b-3" : "text-gray-400"}`} onClick={()=>handleChange(3)}>Ready Statement</button></Link>
        </div>
    </div>

export default function Transaction() {
  const [open, setOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="p-8">
      {/* ===== HEADER ===== */}
      <div className="flex justify-between items-center border-b pb-4 mb-6">
        <h1 className="text-3xl font-semibold">Transaction history</h1>

        <Tabs
          tabs={[
            "Transaction history",
            "Create Statement",
            "Ready Statements",
          ]}
          onChange={(index) => {
            // later you can route or swap content here
            console.log("Active tab:", index);
          }}
        />
      </div>

      {/* ===== FILTERS ===== */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 relative">
        <div className="flex items-center justify-between">
          <div ref={calendarRef} className="relative">
            <MonthButton onClick={() => setOpen(!open)} />
            {open && <DateRangeCalendar onClose={() => setOpen(false)} />}
          </div>

          <FilterTabs />
        </div>

        <FilterRow />
      </div>

      {/* ===== TABLE ===== */}
      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-2xl p-6">
        <div className="flex justify-between text-sm text-gray-500 mb-4 px-4">
          <span>Date</span>
          <span>Transaction type</span>
          <span>Amount</span>
        </div>

        <EmptyState />
      </div>
    </div>
  );
}
