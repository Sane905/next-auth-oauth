import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
	return (
		<ChakraProvider>
			<SessionProvider session={session}>
				<Component {...pageProps} />
			</SessionProvider>
		</ChakraProvider>
	);
};

export default App;
