import Head from "next/head";
import Theme from "../styles/theme";

export default function App({ Component, pageProps }) {
	return (
		<Theme>
			<Head>
				<title>Louis Brent — Systems & Infrastructure</title>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
			</Head>
			<Component {...pageProps} />
		</Theme>
	);
}
