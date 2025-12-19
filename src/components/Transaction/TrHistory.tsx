import type {FC} from 'react';
import ResponsiveDateRangePickers from './DateRangePicker/DateRangeCustomize';
import RadioCollapse from '../common/RadioGroup_comp';

interface Props {}

const TrHistory: FC<Props> = () => {
return <div className='bg-[#f7f9fb] p-[16px] border-1 border-gray-200 rounded-2xl flex flex-row gap-5'>
    <ResponsiveDateRangePickers/>
    <RadioCollapse/>
</div>;

};

export default TrHistory;