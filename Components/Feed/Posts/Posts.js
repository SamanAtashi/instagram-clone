import Post from './Post';

const posts = [
	{
		id: '123',
		username: 'saman',
		userImg: 'https://icon-library.com/images/user-image-icon/user-image-icon-11.jpg',
		img: 'https://icon-library.com/images/user-image-icon/user-image-icon-11.jpg',
		caption: 'hello and welcome',
	},
	{
		id: '123',
		username: 'saman',
		userImg: 'https://icon-library.com/images/user-image-icon/user-image-icon-11.jpg',
		img: 'https://icon-library.com/images/user-image-icon/user-image-icon-11.jpg',
		caption: 'hello and welcome',
	},
];

function Posts() {
	return (
		<div>
			{posts.map((post) => (
				<Post
					key={post.id}
					username={post.username}
					userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
				/>
			))}
		</div>
	);
}

export default Posts;
