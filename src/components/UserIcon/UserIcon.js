import { Box } from "@chakra-ui/layout";
import React from "react";
import "./UserIcon.css";
function UserIcon({ currentUser }) {
  return (
    <Box>
      {currentUser ? (
        <div className="usericon">
          {currentUser.email.charAt(0).toUpperCase()}
        </div>
      ) : null}
    </Box>
  );
}

export default UserIcon;
