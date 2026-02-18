import "./App.css";
import {
  Box,
  Button,
  Card,
  Typography,
  Container
} from "@mui/material";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 6,
          height: "70px",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000
        }}
      >
        <Typography variant="h6" fontWeight={700}>
          FindItFast
        </Typography>

        <Box sx={{ display: "flex", gap: 4, alignItems: "center" }}>
          <Button
            onClick={() => history.push("/ReportItem")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Report Item
          </Button>

          <Button
            onClick={() => history.push("/ViewsItem")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            View Items
          </Button>

          <Button
            onClick={() => history.push("/admin/login")}
            sx={{
              backgroundColor: "#f3f4f6",
              textTransform: "none",
              borderRadius: 2,
              px: 2,
              color: "#000",
              "&:hover": { backgroundColor: "#e5e7eb" }
            }}
          >
            Admin Portal
          </Button>
        </Box>
      </Box>

      {/* ================= HERO ================= */}
      <Box
        sx={{
          minHeight: "100vh",
          mt: "70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: 3
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 36, md: 56 },
            fontWeight: 800,
            color: "#111827"
          }}
        >
          Lost & Found Management System
        </Typography>

        <Typography
          sx={{
            mt: 3,
            fontSize: 18,
            maxWidth: 700,
            color: "#6b7280"
          }}
        >
          Report, track, and claim lost items quickly and efficiently.
          Your one-stop solution for reuniting with your belongings.
        </Typography>

        <Box sx={{ mt: 5, display: "flex", gap: 3, flexWrap: "wrap" }}>
          <Button
            variant="contained"
            onClick={() => history.push("/ReportItem")}
            sx={{
              backgroundColor: "#f4b400",
              color: "#000",
              textTransform: "none",
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontWeight: 600,
              "&:hover": { backgroundColor: "#e0a800" }
            }}
          >
            Report Lost Item
          </Button>

          <Button
            onClick={() => history.push("/ViewsItem")}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              color: "#000"
            }}
          >
            View Lost Items
          </Button>
        </Box>
      </Box>

      {/* ================= HOW IT WORKS ================= */}
      <Box
        sx={{
          backgroundColor: "#f9fafb",
          py: 10
        }}
      >
        <Container maxWidth="lg">
          <Box textAlign="center">
            <Typography variant="h4" fontWeight={700}>
              How It Works
            </Typography>

            <Typography sx={{ mt: 2, color: "#6b7280" }}>
              A simple process to find what you've lost.
            </Typography>
          </Box>

          {/* HORIZONTAL STEPS */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 4,
              mt: 8,
              flexWrap: "wrap"
            }}
          >
            {[
              {
                title: "1. Report Item",
                desc: "Fill out a quick form with details about your lost or found item."
              },
              {
                title: "2. Track & Search",
                desc: "Browse listings and get notified if a match is found."
              },
              {
                title: "3. Claim Belongings",
                desc: "Verify ownership and coordinate pickup."
              }
            ].map((item, index) => (
              <Card
                key={index}
                sx={{
                  flex: 1,
                  minWidth: 280,
                  p: 4,
                  borderRadius: 4,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
                }}
              >
                <Typography fontWeight={700} fontSize={18}>
                  {item.title}
                </Typography>

                <Typography sx={{ mt: 2, color: "#6b7280" }}>
                  {item.desc}
                </Typography>
              </Card>
            ))}
          </Box>

          {/* ================= STATS HORIZONTAL ================= */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 4,
              mt: 10,
              flexWrap: "wrap"
            }}
          >
            {[
              { label: "Total Items", value: 5 },
              { label: "Items Lost", value: 2 },
              { label: "Items Found", value: 2 },
              { label: "Items Claimed", value: 1 }
            ].map((item, index) => (
              <Card
                key={index}
                sx={{
                  flex: 1,
                  minWidth: 220,
                  p: 4,
                  borderRadius: 4,
                  textAlign: "left",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
                }}
              >
                <Typography sx={{ color: "#6b7280" }}>
                  {item.label}
                </Typography>

                <Typography
                  variant="h4"
                  fontWeight={700}
                  sx={{ mt: 1 }}
                >
                  {item.value}
                </Typography>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
