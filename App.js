import { StyleSheet, Text, View, FlatList } from "react-native";
import { useState } from "react";
import Header from "./components/header";
export default function App() {
	const [todos, setTodos] = useState([
		{ text: "buy coffee", key: "1" },
		{ text: "buy milk", key: "2" },
		{ text: "buy water", key: "3" },
	]);
	const renderItem = ({ item }) => {
		return <Text>{item.text}</Text>;
	};

	return (
		<View style={styles.container}>
			<Header />
			<View style={styles.content}>
				<View style={styles.list}>
					<FlatList data={todos} renderItem={renderItem} />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		padding: 40,
	},
	list: {
		marginTop: 20,
	},
});
