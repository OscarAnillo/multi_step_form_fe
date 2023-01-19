import { styled } from "@mui/material/styles";
import { Stack, Switch, Typography } from "@mui/material";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 55,
  height: 36,
  padding: 0,
  borderRadius: 35,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2.5,
    "&.Mui-checked": {
      transform: "translateX(15px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor:
          theme.palette.mode === "dark" ? "rgb(7, 46, 101)" : "rgb(7, 46, 101)",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 35,
    height: 30,
    borderRadius: 36,
    transition: theme.transitions.create(["width"], {
      duration: 250,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark" ? "rgb(7, 46, 101)" : "rgb(7, 46, 101)",
    boxSizing: "border-box",
  },
}));

export default function CustomizedSwitches({ changeHandler }) {
  return (
    <Stack
      direction="row"
      spacing={3}
      alignItems="center"
      justifyContent="center"
    >
      <Typography variant="body1">Monthly</Typography>
      <AntSwitch
        defaultChecked
        inputProps={{ "aria-label": "ant design" }}
        onChange={changeHandler}
      />
      <Typography variant="body1">Yearly</Typography>
    </Stack>
  );
}
