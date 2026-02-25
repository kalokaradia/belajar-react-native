import { Link } from "expo-router";
import { useState } from "react";
import {
	ActivityIndicator,
	Alert,
	Image,
	Modal,
	Platform,
	Pressable,
	StyleSheet,
	Switch,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
	const [isHidden, setIsHidden] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [switchToggle, setSwitchToggle] = useState(false);

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
				style={styles.myButton}
			>
				<Text style={styles.text}>Show Message</Text>
			</TouchableOpacity>
			<TouchableOpacity
				accessibilityLabel="Show the message"
				onPress={showAlert}
				style={styles.myButton}
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

			{/* Activity Indicator */}
			<ActivityIndicator />
			<ActivityIndicator size="large" />
			<ActivityIndicator size="small" color="#0000ff" />
			<ActivityIndicator size="large" color="#00ff00" />

			{/* Modal */}
			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					Alert.alert("Modal has been closed.");
					setModalVisible(!modalVisible);
				}}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Hello World!</Text>
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => setModalVisible(!modalVisible)}
						>
							<Text style={styles.textStyle}>Hide Modal</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
			<Pressable
				style={[styles.button, styles.buttonOpen]}
				onPress={() => setModalVisible(true)}
			>
				<Text style={styles.textStyle}>Show Modal</Text>
			</Pressable>

			{/* Switch */}
			<Switch value={switchToggle} onValueChange={setSwitchToggle} />

			<Link href="/status-bar">Go to Status Bar</Link>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		padding: 8,
	},
	myButton: {
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
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});
