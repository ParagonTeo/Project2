import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/map");
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      sx={{
        background: "linear-gradient(180deg, rgba(78, 69, 69, 1) 0%, rgba(255, 0, 0, 1) 100%)",
      }}
    >
      <Box width="100%" height="100%" maxWidth={390} maxHeight={844} bgcolor="transparent">
        <Button
          variant="contained"
          sx={{
            width: 85,
            height: 50,
            position: "absolute",
            top: "50%", // Center vertically
            left: "50%", // Center horizontally
            transform: "translate(-50%, -50%)", // Adjusts for centering
            bgcolor: "rgba(44, 44, 44, 1)",
            borderRadius: 1,
            border: "1px solid rgba(44, 44, 44, 1)",
            color: "rgba(245, 245, 245, 1)",
            textTransform: "none",
          }}
          onClick={handleButtonClick}
        >
          Map
        </Button>

        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            top: "30%", // Adjust position as needed
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "Inter, Helvetica",
            fontWeight: 700,
            fontSize: { xs: 36, sm: 48 },
            color: "black",
            letterSpacing: "-0.96px",
            lineHeight: "120%",
            textAlign: "center",
          }}
        >
          TechNav
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeScreen;
