import faker from 'faker';
import { useEffect, useState } from 'react';
import Story from './Story';

function Stories() {
	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		const suggestions = [...Array(25)].map((_, idx) => ({
			...faker.helpers.contextualCard(),
			id: idx,
		}));

		setSuggestions(suggestions);
	}, []);

	return (
		<div>
			{suggestions.map((profile) => (
				<Story
					key={profile.id}
					username={profile.username}
					img={profile.avatar}
				/>
			))}
		</div>
	);
}

export default Stories;
