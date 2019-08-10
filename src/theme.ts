import { createMuiTheme } from "@material-ui/core/styles";
import { red, deepPurple, green } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: green
  }
});

export default theme;
