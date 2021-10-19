import Image from 'next/image';
function Header() {
	return (
		<div>
			<div className="relative">
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png"
					layout="fill"
				/>
			</div>
		</div>
	);
}

export default Header;
