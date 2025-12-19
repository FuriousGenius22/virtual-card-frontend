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

    <hr className='w-full pt-0 mt-0 border-gray-200 border-1'></hr>

    {/* The part we can see the result! */}
    <div className=' mt-[24px]'>
        {transactionHistory ? <TrHistory/> : <Outlet/>}
    </div>
</>

};

export default Transaction;