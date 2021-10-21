function Story({ username, img }) {
	return (
		<div>
			<img src={img} alt="profile" />
			<p>{username}</p>
		</div>
	);
}

export default Story;
