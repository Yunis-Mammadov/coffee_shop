import { createTheme } from "@mui/system";

const theme = (mode) => createTheme({
    palette:{
        mode,
        primary:{
            main:'black'
        },
        secondary:{
            main:'blue'
        }
    }
})

export default theme