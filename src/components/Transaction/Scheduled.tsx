import {useState, type FC} from 'react';

interface Props {}

const Scheduled: FC<Props> = () => {

    const [createStatement, setCreateStatement] = useState(true);
    const [createdSchedules, setCreatedSchedules] = useState(false);

    const handleChange = (number:Number) =>{
        if(number === 1){
            setCreateStatement(true);
            setCreatedSchedules(false);
        }else if(number === 2){
            setCreateStatement(false);
            setCreatedSchedules(true);
        }
    }

return <div>
    <h1 className='mt-10 text-2xl font-semibold'>Statement type</h1>

    <div className='flex flex-row mt-5'>
        <button  className={`p-5 text-lg font-semibold  ${createStatement ? "text-black border-b-blue-600 border-b-3" : "text-gray-400 border-0"}`} onClick={()=>handleChange(1)}>Create Statement</button>
        <button  className={`p-5 text-lg font-semibold  ${createdSchedules ? "text-black border-b-blue-600 border-b-3" : "text-gray-400 border-0"}`} onClick={()=>handleChange(2)}>Created Schedules</button>
    </div>
</div>;

};

export default Scheduled;