import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Divider,
  Chip,
  Avatar
} from "@mui/material";
import { useHistory } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";

export default function AdminDashboard() {
  const history = useHistory();

  const categoryData = [
    { name: "Electronics", value: 1 },
    { name: "Keys", value: 1 },
    { name: "Bags", value: 1 },
    { name: "Wallets", value: 1 },
    { name: "Clothing", value: 1 }
  ];

  const statusData = [
    { name: "Lost", value: 2 },
    { name: "Found", value: 2 },
    { name: "Claimed", value: 1 }
  ];

  const COLORS = ["#ef4444", "#f59e0b", "#22c55e"];

  const tableData = [
    {
      name: "Ray-Ban Sunglasses",
      category: "Clothing & Accessories",
      location: "Student Union",
      date: "7/14/2024",
      status: "Found"
    },
    {
      name: "Blue Backpack",
      category: "Bags & Luggage",
      location: "Gymnasium",
      date: "7/13/2024",
      status: "Lost"
    },
    {
      name: "Car Keys",
      category: "Keys",
      location: "Parking Lot A",
      date: "7/12/2024",
      status: "Found"
    }
  ];

  return (
    <Box sx={{ backgroundColor: "#f4f6f8", minHeight: "100vh" }}>
      
      {/* ================= NAVBAR ================= */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: 8,
          height: "64px",
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
          sx={{
            fontWeight: 700,
            fontSize: "18px",
            cursor: "pointer"
          }}
          onClick={() => history.push("/")}
        >
          FindItFast
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
          <Button
            onClick={() => history.push("/ReportItem")}
            sx={{
              textTransform: "none",
              color: "#374151",
              fontSize: "14px"
            }}
          >
            Report Item
          </Button>

          <Button
            onClick={() => history.push("/ViewsItem")}
            sx={{
              textTransform: "none",
              color: "#374151",
              fontSize: "14px"
            }}
          >
            View Items
          </Button>

          <Button
            sx={{
              backgroundColor: "#f3f4f6",
              textTransform: "none",
              borderRadius: "999px",
              px: 3,
              fontSize: "14px",
              color: "#111827",
              "&:hover": { backgroundColor: "#e5e7eb" }
            }}
          >
            Admin Portal
          </Button>
        </Box>
      </Box>

      <Box sx={{ display: "flex", pt: "64px" }}>
        
        {/* ================= SIDEBAR ================= */}
        <Box
          sx={{
            width: 260,
            backgroundColor: "#f9fafb",
            minHeight: "calc(100vh - 64px)",
            borderRight: "1px solid #e5e7eb",
            p: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between"
          }}
        >
          <Box>
            <Typography fontWeight={700} mb={3}>
              🛠 Admin Panel
            </Typography>

            <Button
              fullWidth
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                backgroundColor: "#e0e7ff",
                color: "#3730a3",
                borderRadius: 2,
                mb: 1,
                fontWeight: 600
              }}
            >
              Dashboard
            </Button>

            <Button
              fullWidth
              sx={{
                justifyContent: "flex-start",
                textTransform: "none",
                color: "#374151"
              }}
              onClick={() => history.push("/")}
            >
              ← Back to Site
            </Button>
          </Box>

          <Box>
            <Typography fontSize={13} color="text.secondary">
              admin@example.com
            </Typography>
            <Button
              fullWidth
              sx={{
                mt: 1,
                textTransform: "none",
                justifyContent: "flex-start",
                color: "#ef4444",
                "&:hover": { backgroundColor: "#fee2e2" }
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>

        {/* ================= CONTENT ================= */}
        <Box sx={{ flex: 1, p: 6 }}>
          <Typography variant="h4" fontWeight={700} mb={1}>
            Dashboard
          </Typography>
          <Typography color="text.secondary" mb={4}>
            Here's a summary of the reported items in the system.
          </Typography>

          {/* SUMMARY CARDS */}
          <Grid container spacing={3}>
            {[
              { title: "Total Items", value: 5, color: "#111827" },
              { title: "Items Lost", value: 2, color: "#ef4444" },
              { title: "Items Found", value: 2, color: "#f59e0b" },
              { title: "Items Claimed", value: 1, color: "#22c55e" }
            ].map((item, i) => (
              <Grid item xs={12} md={3} key={i}>
                <Card sx={{ borderRadius: 3 }}>
                  <CardContent>
                    <Typography fontSize={14} color="text.secondary">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h4"
                      fontWeight={700}
                      sx={{ color: item.color }}
                    >
                      {item.value}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* CHART SECTION */}
          <Grid container spacing={3} mt={2}>
            <Grid item xs={12} md={8}>
              <Card sx={{ p: 3, borderRadius: 3 }}>
                <Typography fontWeight={600}>
                  Items by Category
                </Typography>
                <Typography fontSize={13} color="text.secondary" mb={2}>
                  Distribution of items across different categories.
                </Typography>

                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={categoryData}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" fill="#facc15" radius={[6,6,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ p: 3, borderRadius: 3 }}>
                <Typography fontWeight={600}>
                  Items by Status
                </Typography>
                <Typography fontSize={13} color="text.secondary" mb={2}>
                  A breakdown of all items by their current status.
                </Typography>

                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie data={statusData} dataKey="value" outerRadius={80}>
                      {statusData.map((entry, index) => (
                        <Cell key={index} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </Grid>
          </Grid>

          {/* TABLE */}
          <Box mt={4}>
            <Card sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" mb={2}>
                Item Reports
              </Typography>
              <Divider sx={{ mb: 2 }} />

              {tableData.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 2,
                    borderBottom: "1px solid #f1f1f1"
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar />
                    <Box>
                      <Typography fontWeight={600}>
                        {item.name}
                      </Typography>
                      <Typography fontSize={13} color="text.secondary">
                        {item.category}
                      </Typography>
                    </Box>
                  </Box>

                  <Chip
                    label={item.status}
                    sx={{
                      backgroundColor:
                        item.status === "Lost"
                          ? "#fee2e2"
                          : item.status === "Found"
                          ? "#fef3c7"
                          : "#dcfce7",
                      color:
                        item.status === "Lost"
                          ? "#b91c1c"
                          : item.status === "Found"
                          ? "#92400e"
                          : "#166534"
                    }}
                  />
                </Box>
              ))}
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
