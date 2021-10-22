function MiniProfile() {
	return (
		<div className="flex items-center justify-between mt-14 ml-10">
			<img
				src="https://icon-library.com/images/user-image-icon/user-image-icon-11.jpg"
				alt="profile picture"
				className="w-16 h-16 rounded-full border p-[2px]"
			/>
			<div className="flex-1 mx-4">
				<h2 className="font-bold">saman</h2>
				<h3 className="text-sm text-gray-400">
					Welcome to Instagram
				</h3>
			</div>

			<button className="text-blue-400 text-sm font-semibold">
				Sign Out
			</button>
		</div>
	);
}

export default MiniProfile;
