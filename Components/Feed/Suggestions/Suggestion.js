const Suggestion = ({ id, avatar, username, company }) => {
	return (
		<div key={id} className="flex items-center justify-between mt-3">
			<img
				src={avatar}
				alt="suggestion pic"
				className="w-10 h-10 rounded-full border p-[2px]"
			/>
			<div className="flex-1 ml-4">
				<h2 className="font-semibold text-sm">{username}</h2>
				<h3 className="text-xs text-gray-400">
					Work at {company.name}
				</h3>
			</div>

			<button className="text-blue-400 text-sm font-bold">
				Follow
			</button>
		</div>
	);
};

export default Suggestion;
