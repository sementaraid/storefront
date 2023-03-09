import { makeStyles } from "@mui/styles";

export default makeStyles({
  header: {
    position: "fixed",
    width: "100%",
  },
  headerLogo:{
    width:70,
    height: "auto"
  },
  headerContainerTop:{
    display:"flex",
    flexDirection: "row",
    alignItems:"center",
    paddingTop: 15,
    paddingBottom: 15
  },
  logoWrapper:{
    display: "block"
  }
})