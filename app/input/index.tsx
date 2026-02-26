import React from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	Text,
	TextInput,
	TouchableWithoutFeedback,
	View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Input() {
	const [text, setText] = React.useState("Masih Kosong");

	return (
		<SafeAreaProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<KeyboardAvoidingView
					style={{ flex: 1 }}
					behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
						<View style={{ flex: 1, justifyContent: "center", padding: 20 }}>
							<TextInput
								style={{ fontSize: 24, borderWidth: 1, padding: 10 }}
								placeholder="useless placeholder"
								value={text}
								onChangeText={setText}
							/>
							<Text style={{ fontSize: 24, marginTop: 20 }}>{text}</Text>
						</View>
					</TouchableWithoutFeedback>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</SafeAreaProvider>
	);
}
