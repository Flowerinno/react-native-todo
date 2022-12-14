import {
	StyleSheet,
	Text,
	View,
	FlatList,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import { useState } from "react";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import Sandbox from "./components/sandbox";
export default function App() {
	const [todos, setTodos] = useState([
		{ text: "buy coffee", key: "1" },
		{ text: "buy milk", key: "2" },
		{ text: "buy water", key: "3" },
	]);
	const deleteItem = (key) => {
		setTodos((prev) => prev.filter((item) => item.key !== key));
	};
	const renderItem = ({ item }) => {
		return <TodoItem item={item} deleteItem={deleteItem} />;
	};
	const addTodoHandler = (text) => {
		if (text.length > 3) {
			setTodos((prev) => [{ text, key: Math.random().toString() }, ...prev]);
		} else if (text.length < 3) {
			Alert.alert("OOPS", "Todos must be at least 3 characters long", [
				{ text: "Understood", onPress: () => console.log("alert closed") },
			]);
		}
	};
	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.container}>
				<Header />
				<View style={styles.content}>
					<AddTodo addTodoHandler={addTodoHandler} />
					<View style={styles.list}>
						<FlatList data={todos} renderItem={renderItem} />
					</View>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	content: {
		flex: 1,
		padding: 40,
	},
	list: {
		flex: 1,
		marginTop: 20,
	},
});
