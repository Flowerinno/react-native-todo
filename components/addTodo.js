import { StyleSheet, TextInput, Button, Text, View } from "react-native";
import { useState } from "react";

export default function AddTodo({ addTodoHandler }) {
	const [text, setText] = useState("");
	const changeHandler = (e) => {
		setText(e);
	};
	return (
		<View>
			<TextInput
				style={styles.input}
				placeholder="new todo..."
				onChangeText={changeHandler}
			/>
			<Button
				onPress={() => addTodoHandler(text)}
				title="add todo"
				color="coral"
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	input: {
		marginBottom: 10,
		paddingHorizontal: 8,
		paddingVertical: 6,
		borderBottomWidth: 1,
		borderBottomColor: "#ddd",
	},
});
