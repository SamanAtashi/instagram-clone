import Head from 'next/head';
import Feed from '../Components/Feed/Feed';
import Header from '../Components/Header';

export default function Home() {
	return (
		<div className="">
			<Head>
				<title>Instagram</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

            <Feed />
		</div>
	);
}
