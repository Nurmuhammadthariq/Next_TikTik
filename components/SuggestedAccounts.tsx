import React, { useEffect } from 'react'
import Image from 'next/image';
import { NextPage } from 'next';
import Link from 'next/link';

import { IUser } from '@/type'
import { GoVerified } from 'react-icons/go';

interface IProps {
  fetchAllUsers: () => void;
  allUsers: IUser[]
}

const SuggestedAccounts: NextPage<IProps> = ({ fetchAllUsers, allUsers }) => {
  useEffect(() => {
    fetchAllUsers()
  }, [fetchAllUsers])

  const users = allUsers.sort(() => 0.5 - Math.random()).slice(0, allUsers.length)
  console.log(allUsers)
  return (
    <div className='xl:border-b-2 border-gray-200 pb-4'>
      <p className='text-gray-500 font-semibold m-3 hidden xl:block'>
        Suggested accounts
      </p>
      <div>
        {users?.slice(0, 6).map((user: IUser) => (
          <Link href={`/profile/${user._id}`} key={user._id}>
            <div className="flex gap-3 hover:bg-primary p-2 cursor-pointer font-semibold rounded">
              <div className="w-8 h-8">
                <Image 
                  width={34} 
                  height={34} 
                  className='rounded-full' 
                  src={user.image} 
                  alt='user-profile' 
                  layout='responsive'
                 />
              </div>
              <div className="hidden xl:block">
                <p className='flex gap-1 items-center text-sm font-bold text-primary lowercase'>
                  {user.username.replace(/\s+/g, '')}
                  <GoVerified className='text-blue-400' />
                </p>
                <p className='capitalize text-gray-400 text-xs'>
                  {user.username}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SuggestedAccounts