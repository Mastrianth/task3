import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core";

const MenuItemCustom = withStyles(() => ({
  root: {
    backgroundColor: "#ECEDED !important",
    fontFamily: "'Asap', sans-serif",
    padding: "13px 16px",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: "16px",
    fontWeight: "400",
    "&:hover": {
      backgroundColor: "#00bdd3 !important",
    },
  },
  selected: {
    color: "#FFF",
  },
}))(MenuItem);
export default MenuItemCustom;
