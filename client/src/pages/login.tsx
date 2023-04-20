import { useEffect, useRef, useState } from "react";
import { useLogin } from "@refinedev/core";
import { Container, Box, Button, TextField } from "@mui/material";

import { yariga } from "../assets";

import { CredentialResponse } from "../interfaces/google";

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse | null>({
    v3LegacyAuthProviderCompatible: true,
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleGuestLogin = async () => {
    try {
      const response = await login({});
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <Box component="div" sx={{ backgroundColor: "#FCFCFC" }}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <img src={yariga} alt="Yariga Logo" />
          </div>
          <Box mt={4}>
            <TextField
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              variant="outlined"
              margin="normal"
              fullWidth
              autoFocus
            />
            <TextField
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              margin="normal"
              fullWidth
              type="password"
            />
            <Button variant="contained" onClick={handleGuestLogin}>
              Login as Guest
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
