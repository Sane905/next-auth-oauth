import React, { useCallback } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { NextPage } from 'next';
import { Button, Stack, Text } from '@chakra-ui/react';

const Login: NextPage = () => {
	// sessionには、以下のような値が入っています。
	// {
	//     "user":{
	//        "name":"John",
	//        "email":"john@examle.com",
	//        "image":"https://lh3.googleusercontent.com/a/AGNmyxZF7jQN_YTYVyxIx5kfdo3kalfRktVD17GrZ9n=s96-c"
	//     },
	//     "expires":"2023-04-01T00:29:51.016Z"
	// }
	const { data: session } = useSession();
	console.log(session);

	const handleLogin = useCallback(() => {
		signIn();
	}, []);

	const handleSignOut = useCallback(() => {
		signOut();
	}, []);

	return (
		<>
			{
				// セッションがある場合、ログアウトを表示
				session && (
					<Stack alignItems='center'>
						<Text>ようこそ, {session.user?.email}</Text>
						<Button onClick={handleSignOut}>ログアウト</Button>
					</Stack>
				)
			}
			{
				// セッションがない場合、ログインを表示
				// ログインボタンを押すと、ログインページに遷移する
				!session && (
					<Stack alignItems='center'>
						<Text>ログインしていません</Text>
						<Button onClick={handleLogin}>ログイン</Button>
					</Stack>
				)
			}
		</>
	);
};

export default Login;
