import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/outline';

function Header() {
	return (
		<div>
			<div className="flex justify-between max-w-6xl">
				{
					//* left--------------
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
					//* middle--------------
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
					//* right--------------
				}
                
			</div>
		</div>
	);
}

export default Header;
