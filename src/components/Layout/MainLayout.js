import { Input } from "@chakra-ui/input";
import { Box, Heading, Spacer } from "@chakra-ui/layout";
import React, { useState, useEffect } from "react";
import "./MainLayout.css";
import { db, timestamp, auth } from "../../firebase/firebase";
import { Button } from "@chakra-ui/button";
import TodoListItem from "../TodoListItem/TodoListItem";
import LogOut from "../LogOut/LogOut";
import UserIcon from "../UserIcon/UserIcon";

function MainLayout({ user }) {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState("");

  useEffect(() => {
    db.collection(`/${auth.currentUser.uid}`)
      .orderBy("timestamp", "desc")
      .onSnapshot((snap) => {
        const listOfTodos = snap.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }));
        setTodos(listOfTodos);
      });
  }, []);

  const addTodo = (e) => {
    e.preventDefault();

    db.collection(`/${auth.currentUser.uid}`).add({
      inprogress: true,
      timestamp: timestamp,
      todo: todoInput,
    });
    setTodoInput("");
  };

  return (
    <>
      <Box className="header">
        <UserIcon currentUser={user} />
        <Spacer />
        <LogOut />
      </Box>
      <Box className="todoapp">
        <Box>
          <Heading size="2xl" color="#e76f51">
            ToDo Lite
          </Heading>
          <form>
            <Input
              value={todoInput}
              className="input-box"
              type="text"
              variant="flushed"
              placeholder="Write A Todo"
              onChange={(e) => setTodoInput(e.target.value)}
            />
            <Button d="none" type="submit" onClick={addTodo}>
              submit
            </Button>
          </form>
          {todos
            ? todos.map((todo) => (
                <TodoListItem
                  key={todo.id}
                  todo={todo.todo}
                  inprogress={todo.inprogress}
                  id={todo.id}
                />
              ))
            : null}
        </Box>
      </Box>
    </>
  );
}

export default MainLayout;
