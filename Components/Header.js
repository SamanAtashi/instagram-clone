import Image from 'next/image';
function Header() {
	return (
		<div>
			<div className="flex justify-between max-w-6xl">
				<div className="relative h-24 w-24 hidden lg:inline-grid">
					<Image
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
						layout="fill"
                        objectFit="contain"
					/>
				</div>
				<div className="relative h-10 w-10 lg:hidden">
					<Image
						src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
						layout="fill"
                        objectFit="contain"
					/>
				</div>
			</div>
		</div>
	);
}

export default Header;
