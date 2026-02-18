import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  MenuItem,
} from "@mui/material";
import { useHistory } from "react-router-dom";

export default function ReportItem() {
  const history = useHistory();

  return (
    <Box sx={{ backgroundColor: "#ffffff", minHeight: "100vh" }}>
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

      {/* ================= CONTENT ================= */}
    <Box
      sx={{
        pt: "140px",
        pb: 10,
        display: "flex",
        justifyContent: "center",
        px: 3,
        backgroundColor: "#ffffff"
      }}
    >
      <Box sx={{ width: "100%", maxWidth: "700px" }}>
        
        {/* ===== TITLE CENTER ===== */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h4" fontWeight={800} mb={1}>
            Report a Lost Item
          </Typography>
          <Typography color="text.secondary">
            Fill out the form below to report a lost item.
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>

          {/* IMAGE UPLOAD */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              Item Image (for AI Analysis)
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                component="label"
                sx={{
                  flex: 1,
                  justifyContent: "flex-start",
                  textTransform: "none",
                  borderRadius: 2,
                  borderColor: "#e5e7eb",
                  color: "#6b7280"
                }}
              >
                Choose File
                <input type="file" hidden />
              </Button>

              <Button
                variant="outlined"
                sx={{
                  textTransform: "none",
                  borderRadius: 2,
                  backgroundColor: "#f9fafb",
                  borderColor: "#e5e7eb",
                  color: "#9ca3af"
                }}
              >
                Analyze with AI
              </Button>
            </Box>

            <Typography variant="body2" color="text.secondary" mt={1}>
              Upload an image and let AI fill out the form for you.
            </Typography>
          </Box>

          {/* ITEM NAME */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              Item Name
            </Typography>
            <TextField
              placeholder="e.g., Black iPhone 13"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "#f9fafb"
                }
              }}
            />
          </Box>

          {/* CATEGORY */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              Category
            </Typography>
            <TextField
              select
              fullWidth
              defaultValue=""
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "#f9fafb"
                }
              }}
            >
              <MenuItem value="" disabled>
                Select a category
              </MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Accessories">Accessories</MenuItem>
              <MenuItem value="Documents">Documents</MenuItem>
              <MenuItem value="Others">Others</MenuItem>
            </TextField>
          </Box>

          {/* LAST SEEN */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              Last Seen Location
            </Typography>
            <TextField
              placeholder="e.g., Library, 2nd floor"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "#f9fafb"
                }
              }}
            />
          </Box>

          {/* DATE LOST */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              Date Lost
            </Typography>
            <TextField
              type="date"
              defaultValue="2026-02-18"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "#f9fafb"
                }
              }}
            />
          </Box>

          {/* DESCRIPTION */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              Item Description
            </Typography>
            <TextField
              multiline
              rows={4}
              placeholder="Provide any specific details, like scratches, stickers, or model numbers."
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "#f9fafb"
                }
              }}
            />
          </Box>

          {/* CONTACT */}
          <Box>
            <Typography fontWeight={600} mb={1}>
              Contact for Verification (Email/Phone)
            </Typography>
            <TextField
              placeholder="e.g., your_email@example.com or 08123456789"
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: 2,
                  backgroundColor: "#f9fafb"
                }
              }}
            />
            <Typography variant="body2" color="text.secondary" mt={1}>
              An admin will use this to contact you about your item.
            </Typography>
          </Box>

          {/* SUBMIT */}
          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#fbbf24",
              color: "#000",
              textTransform: "none",
              fontWeight: 700,
              py: 1.6,
              borderRadius: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              "&:hover": {
                backgroundColor: "#f59e0b"
              }
            }}
          >
            Submit Report
          </Button>

        </Box>
      </Box>
    </Box>
    </Box>
  );
}
