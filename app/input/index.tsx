import React from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Input() {
	const [text, setText] = React.useState("Masih Kosong");

	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<View style={{ padding: 5 }}>
					<TextInput
						style={{ padding: 1, width: 200 }}
						placeholder="useless placeholder"
						value={text}
						onChangeText={setText}
					/>
					<Text>{text}</Text>
				</View>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
