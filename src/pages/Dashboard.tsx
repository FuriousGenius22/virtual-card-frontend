import { Button, Image } from '@nextui-org/react';
import type { FC } from 'react';
import React from 'react';
import PageMeta from '../components/common/PageMeta';
import AccountCard from '../components/common/AccountCard';
import { Link } from 'react-router-dom';
import { SquareChevronRight, SquarePlus, ArrowRightLeft } from 'lucide-react'

type Props = object

const Dashboard: FC<Props> = () => {


  return (
    <>
      <div className='"w-full px-4 pt-4 sm:px-6 lg:px-8'>
        <PageMeta
          title='This is dashboard page'
          description='Welcome to our page!'
        />

        <h1 className='mb-6 text-2xl font-semibold sm:text-3xl'>Dashboard</h1>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
          <AccountCard 
            width="120px"
            Link_comp={
              <Link to="/accounts/overview"><h1 className='text-2xl font-semibold hover:underline'>Main account{">"}</h1></Link>
            }
            Main_str='$0.00'
            Button_comp={
              <div className='flex flex-row justify-start gap-5'>
                <Button as={Link} to="/accounts/topUp" className='flex flex-col w-full gap-3 p-2 px-4 text-white bg-black border-gray-900 rounded-lg sm:flex-row sm:w-auto'>
                  <SquareChevronRight />
                  Top-up
                </Button>
                <Button as={Link} to="/accounts/accountsTransfer" className='bg-gray-300' ><ArrowRightLeft /></Button>
              </div>
            }
          />

          <AccountCard width="50px"
            Link_comp={
              <Link to="/cards?type=personal,buyer&status=1"><h1 className='text-2xl font-semibold hover:underline'>Personal Cards{">"}</h1></Link>
            }
            Main_str='$0.00'
            Button_comp={
              <Link to="/new-card">
                <button className='flex flex-row gap-3 p-2 border-gray-900 rounded-lg w-50 bg-gray-300/20 hover:bg-gray-300'>
                  <SquarePlus />
                  Issue a new card
                </button>
              </Link>
            }
          />

          <AccountCard width="50px"
            Link_comp={
              <h1 className='text-2xl font-semibold'>Total amount</h1>
            }
            Main_str='$0.00'
            Button_comp={
              <div className='flex flex-row justify-between'>
                <div className='flex flex-col justify-start'>
                  <Link to="/teams/welcome" className='text-sm hover:underline'>Teams accounts</Link>
                  <p><span className='text-2xl font-semibold'>$0</span>.00</p>
                </div>
                <div className='line'></div>
                <div className='flex flex-col justify-start'>
                  <Link to="/teams/welcome" className='text-sm hover:underline'>Team card</Link>
                  <p><span className='text-2xl font-semibold'>$0</span>.00</p>
                </div>
              </div>
            }
          />
        </div>
        <div className='mt-[24px] bg-[#e3edfc] w-full px-6 py-10 rounded-3xl flex flex-col justify-center items-center space-y-2'>
          <Image
            src="./images/Dashboard2.png"
            fallbackSrc="/default-avatar.jpg"
            alt="User avatar"
            className="max-w-[200px] w-full h-auto"
          />
          <h1 className='text-xl font-semibold sm:text-2xl'>Top-up your account</h1>
          <p className="text-sm sm:text-base">To start using the service, you need to top-up your account</p>
          <Button as={Link} to="/accounts/topUp" className='flex flex-row w-full p-2 text-white bg-black border-gray-900 rounded-lg sm:w-auto'>
            <SquareChevronRight />
            Top-up
          </Button>
        </div>
      </div>
    </>
  )

};

export default Dashboard;