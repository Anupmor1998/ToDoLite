import { Button } from "@chakra-ui/button";
import { Spacer } from "@chakra-ui/layout";
import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import "./TodoListItem.css";
import { db, auth } from "../../firebase/firebase";

function TodoListItem({ todo, inprogress, id }) {
  const toggleInprogress = () => {
    db.collection(`/${auth.currentUser.uid}`).doc(id).update({
      inprogress: !inprogress,
    });
  };

  const deleteTodo = () => {
    db.collection(`/${auth.currentUser.uid}`).doc(id).delete();
  };
  return (
    <Box className="todo-item">
      <Box>
        <Text className="todo">{todo}</Text>
        <Text className="inprogress">
          {inprogress ? "In Progress 🚧" : "Completed ✔️"}
        </Text>
      </Box>
      <Spacer />
      <Box>
        <Button
          marginRight="0.5rem"
          variant="outline"
          onClick={toggleInprogress}
          colorScheme={inprogress ? "whatsapp" : "yellow"}
        >
          {inprogress ? "Done" : "Undone"}
        </Button>
        <Button variant="outline" onClick={deleteTodo} colorScheme="red">
          X
        </Button>
      </Box>
    </Box>
  );
}

export default TodoListItem;
