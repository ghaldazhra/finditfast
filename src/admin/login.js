import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent
} from "@mui/material";
import { useHistory } from "react-router-dom";

export default function Login() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("isAdmin", "true");
      history.push("/admin/dashboard");
    } else {
      alert("Username atau password salah");
    }
  };

  return (
    <Box sx={{ backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 6,
          height: "70px",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb"
        }}
      >
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ cursor: "pointer" }}
          onClick={() => history.push("/")}
        >
          FindItFast
        </Typography>
      </Box>

      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Card sx={{ width: 400, borderRadius: 3, boxShadow: 3 }}>
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h5"
              fontWeight={600}
              textAlign="center"
              gutterBottom
            >
              Admin Login
            </Typography>

            <TextField
              fullWidth
              label="Username"
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{
                mt: 2,
                backgroundColor: "#fbbf24",
                textTransform: "none",
                py: 1.2,
                borderRadius: 2,
                "&:hover": {
                  backgroundColor: "#f59e0b"
                }
              }}
            >
              Sign In
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
