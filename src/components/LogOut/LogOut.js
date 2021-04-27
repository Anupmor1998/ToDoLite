import { Button } from "@chakra-ui/button";
import React from "react";
import { auth } from "../../firebase/firebase";
import "./LogOut.css";
function LogOut() {
  const handleLogOut = async () => {
    await auth.signOut();
  };

  return (
    <div className="logout">
      <Button variant="outline" colorScheme="orange" onClick={handleLogOut}>
        Log Out
      </Button>
    </div>
  );
}

export default LogOut;
