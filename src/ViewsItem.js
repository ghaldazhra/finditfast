import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
  Paper,
  Avatar
} from "@mui/material";
import { useHistory } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

export default function ViewsItem() {
  const history = useHistory();

  const items = [
    {
      name: "Ray-Ban Sunglasses",
      desc: "Classic Wayfarer model, black frame.",
      category: "Clothing & Accessories",
      location: "Student Union",
      date: "7/14/2024",
      status: "Found",
      image: "https://via.placeholder.com/40"
    },
    {
      name: "Blue Backpack",
      desc: "Jansport backpack with a laptop inside.",
      category: "Bags & Luggage",
      location: "Gymnasium",
      date: "7/13/2024",
      status: "Lost",
      image: "https://via.placeholder.com/40"
    },
    {
      name: "Car Keys",
      desc: "Toyota key with a red keychain.",
      category: "Keys",
      location: "Parking Lot A",
      date: "7/12/2024",
      status: "Found",
      image: "https://via.placeholder.com/40"
    },
    {
      name: "Brown Leather Wallet",
      desc: "Contains a driver's license and a few credit cards.",
      category: "Wallets & Purses",
      location: "Cafeteria",
      date: "7/11/2024",
      status: "Claimed",
      image: "https://via.placeholder.com/40"
    },
    {
      name: "iPhone 14 Pro",
      desc: "Black iPhone 14 Pro with a blue case.",
      category: "Electronics",
      location: "Main Library",
      date: "7/10/2024",
      status: "Lost",
      image: "https://via.placeholder.com/40"
    }
  ];

  const statusColor = (status) => {
    if (status === "Lost") return "#ef4444";
    if (status === "Found") return "#facc15";
    if (status === "Claimed") return "#22c55e";
  };

  return (
    <Box sx={{ backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      
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
        <Typography
          variant="h6"
          fontWeight={700}
          sx={{ cursor: "pointer" }}
          onClick={() => history.push("/")}
        >
          FindItFast
        </Typography>

        <Box sx={{ display: "flex", gap: 4 }}>
          <Button
            onClick={() => history.push("/ReportItem")}
            sx={{ textTransform: "none", color: "#000" }}
          >
            Report Item
          </Button>

          <Button
            sx={{ textTransform: "none", color: "#000", fontWeight: 600 }}
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

      {/* ================= CONTENT ================= */}
      <Box sx={{ pt: "100px", px: 8 }}>

        <Typography variant="h4" fontWeight={700}>
          Lost & Found Items
        </Typography>

        <Typography color="text.secondary" mb={4}>
          Browse items that have been reported lost or found.
        </Typography>

        <Paper sx={{ p: 4, borderRadius: 3 }}>

          {/* Search + Filter */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 3
            }}
          >
            <Typography variant="h6" fontWeight={600}>
              Item Reports
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                size="small"
                placeholder="Search items..."
                InputProps={{
                  startAdornment: <SearchIcon sx={{ mr: 1 }} />
                }}
              />

              <TextField select size="small" defaultValue="All Categories">
                <MenuItem value="All Categories">All Categories</MenuItem>
              </TextField>

              <TextField select size="small" defaultValue="All Statuses">
                <MenuItem value="All Statuses">All Statuses</MenuItem>
              </TextField>
            </Box>
          </Box>

          {/* Table Header */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
              fontWeight: 600,
              borderBottom: "1px solid #e5e7eb",
              pb: 1
            }}
          >
            <Typography>Item</Typography>
            <Typography>Category</Typography>
            <Typography>Location</Typography>
            <Typography>Date Lost</Typography>
            <Typography>Status</Typography>
          </Box>

          {/* Items */}
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
                alignItems: "center",
                py: 2,
                borderBottom: "1px solid #f0f0f0"
              }}
            >
              {/* Item + Image */}
              <Box sx={{ display: "flex", gap: 2 }}>
                <Avatar src={item.image} variant="rounded" />
                <Box>
                  <Typography fontWeight={600}>{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Box>
              </Box>

              <Typography>{item.category}</Typography>
              <Typography>{item.location}</Typography>
              <Typography>{item.date}</Typography>

              <Box>
                <Box
                  sx={{
                    backgroundColor: statusColor(item.status),
                    color: "#fff",
                    px: 2,
                    py: 0.5,
                    borderRadius: 20,
                    display: "inline-block",
                    fontSize: "0.8rem",
                    fontWeight: 600
                  }}
                >
                  {item.status}
                </Box>
              </Box>
            </Box>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}
