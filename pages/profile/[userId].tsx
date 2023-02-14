import React from 'react'
import Image from 'next/image'
import { GoVerified } from 'react-icons/go'
import axios from 'axios'

const Profile = () => {
	return (
		<div className='w-full'>
			<div className="flex gap-6 mb-6 bg-white w-full">
				<div className="w-16 h-16 md:w-32 md:h-32">
					<Image
						width={120}
						height={120}
						layout='responsive'
						className='rounded-full'
						src={'http://localhost:3000/_next/image?url=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FD5603AQGADjnbAC1m-w%2Fprofile-displayphoto-shrink_200_200%2F0%2F1643930898899%3Fe%3D1679529600%26v%3Dbeta%26t%3D92d89cGkGXy2mr8zxWo9tfo9yupwzcEQbRC_OdJJbss&w=1920&q=75'}
						alt='user-profile'
					/>
				</div>
				<div>
					<div className="text-sm md:text-2xl font-bold tracking-wide flex gap-2 items-center justify-center lowercase">
						<span>Thoriq</span>
						<GoVerified className='text-blue-400 md:text-xl text-sm' />
					</div>
					<p className='text-sm font-medium'>Nur M Thoriq</p>
				</div>
			</div>
			<div>
				<div className="flex gap-10 pb-3 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full">
					<p className='text-xl font-semibold cursor-pointer mt-2'>
						Videos
					</p>
					<p className='text-xl font-semibold cursor-pointer mt-2'>
						Liked
					</p>
				</div>
			</div>
		</div>
	)
}

export default Profile