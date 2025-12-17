import type {FC} from 'react';
import DateRangePicker from './DateRangePicker/DateRangePicker';
import ResponsiveDateRangePickers from './DateRangePicker/DateRangeCustomize';

interface Props {}

const TrHistory: FC<Props> = () => {
return <div className='bg-[#f7f9fb] p-[16px] border-1 border-gray-200 rounded-2xl flex flex-row gap-5'>
    <DateRangePicker/>
    <ResponsiveDateRangePickers/>
</div>;

};

export default TrHistory;