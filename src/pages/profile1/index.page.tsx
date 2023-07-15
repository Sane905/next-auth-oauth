import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { NextPage } from 'next';
import { Button, Stack, Text } from '@chakra-ui/react';

const Profile1: NextPage = () => {
	// sessionには、以下のような値が入っています。
	// {
	//     "user":{
	//        "name":"Taro Yamada",
	//        "email":"taro@examle.com",
	//        "image":"https://lh3.googleusercontent.com/a/AGNmyxZF7jQN_YTYVyxIx5kfdo3kalfRktVD17GrZ9n=s96-c"
	//     },
	//     "expires":"2023-04-01T00:29:51.016Z"
	// }
	const { data: session } = useSession({ required: true });

	return (
		<>
			{
				// セッションがある場合は、プロファイルを表示する
				session && (
					<Stack alignItems='center'>
						<Text>プロファイル</Text>
						<Text>{session.user?.email}</Text>
						{session.user?.image && (
							<Stack>
								<Image
									src={session.user?.image}
									alt=""
									width={96}
									height={96}
								/>
							</Stack>
						)}
						<Button onClick={() => signOut()}>Sign out</Button>
					</Stack>
				)
			}
			{
				// セッションがない場合は、ログインページに遷移する
				!session && (
					<Stack alignItems='center'>
						<Text>You are not signed in.</Text>
					</Stack>
				)
			}
		</>
	);
};

export default Profile1;
