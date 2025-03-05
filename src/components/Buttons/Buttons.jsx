import Button from "@mui/material/Button";
const Buttons = ({ tag, onClick, type = "button" }) => {
  return (
    <Button
      sx={{
        color: "rgb(0,0,0)",
        borderColor: "gray",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "rgb(211,211,211)",
          borderColor: "rgb(105,105,105)",
        },
      }}
      type={type}
      variant="outlined"
      onClick={onClick}
    >
      {tag}
    </Button>
  );
};

export default Buttons;
