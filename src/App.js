import { Box, ChakraProvider, Img } from "@chakra-ui/react";
import "./App.css";
import LogIn from "./components/LogIn/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../src/firebase/firebase";
import loader from "./images/loader.svg";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Img className="loader" src={loader} />;
  }
  return (
    <ChakraProvider>
      <Box height="100vh" className="App">
        {user ? <MainLayout user={user} /> : <LogIn />}
      </Box>
    </ChakraProvider>
  );
}

export default App;
