import { useState } from "react";
import {
	Alert,
	Image,
	Platform,
	StyleSheet,
	Text,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
	const [isHidden, setIsHidden] = useState(false);
	const imgUri =
		"https://kalokaradiananda.my.id/api/image/kaloka-radia-nanda.png";

	function showAlert() {
		if (Platform.OS === "web") {
			window.alert("This is alert2");
		} else {
			Alert.alert("This is alert2");
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			{/* Text */}
			{isHidden && <Text>Hello World!</Text>}

			{/* Button */}
			<TouchableOpacity
				accessibilityLabel="Show the message"
				onPress={() => setIsHidden(!isHidden)}
				style={styles.button}
			>
				<Text style={styles.text}>Show Message</Text>
			</TouchableOpacity>
			<TouchableOpacity
				accessibilityLabel="Show the message"
				onPress={showAlert}
				style={styles.button}
			>
				<Text style={styles.text}>Show Message2</Text>
			</TouchableOpacity>

			{/* Image */}
			<Image
				source={{ uri: imgUri }}
				style={{
					width: 255,
					height: 255,
					marginTop: 10,
					resizeMode: "cover",
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		padding: 8,
	},
	button: {
		backgroundColor: "#485148",
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 8,
		alignItems: "center",
		width: 255,
		marginTop: 20,
	},
	text: {
		color: "white",
		fontWeight: "bold",
	},
});
