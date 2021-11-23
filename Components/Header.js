import Image from 'next/image';
import {
	SearchIcon,
	PlusCircleIcon,
	UserGroupIcon,
	HeartIcon,
	PaperAirplaneIcon,
	MenuIcon,
} from '@heroicons/react/outline';
import { HomeIcon } from '@heroicons/react/solid';

function Header() {
	return (
		<div className="shadow-sm border-b bg-white sticky top-0 z-50">
			<div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
				{
					//* left <--------------
				}
				<div className="relative w-24 hidden lg:inline-grid">
					<Image
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				<div className="relative  w-10 lg:hidden">
					<Image
						src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
						layout="fill"
						objectFit="contain"
					/>
				</div>
				{
					//* middle <--------------
				}
				<div className="max-w-xs">
					<div className="relative mt-1 p-3 rounded-md">
						<div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
							<SearchIcon className="h-5 w-5 text-gray-500" />
						</div>
						<input
							className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:border-black focus:ring-black rounded-md"
							type="text"
							placeholder="Search"
						/>
					</div>
				</div>
				{
					//* right <--------------
				}
				<div className="flex items-center justify-end space-x-4">
					<HomeIcon className="navBtn" />
					<MenuIcon className="h-6 md:hidden cursor-pointer" />
					<div className="relative navBtn">
						<PaperAirplaneIcon className="navBtn rotate-45" />
						<div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
							4
						</div>
					</div>
					<PlusCircleIcon className="navBtn" />
					<UserGroupIcon className="navBtn" />
					<HeartIcon className="navBtn" />
					<img
						src="https://www.nicepng.com/png/detail/780-7805650_generic-user-image-male-man-cartoon-no-eyes.png"
						alt="profile pic"
                        className="h-10 cursor-pointer rounded-full"
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
