import Logo from "@component/Logo";
import { Grid } from "@mui/material";

export function WelcomeScreen() {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '60vh' }}
    >

      <Grid item xs={3}>
        <Logo height="200px" />
      </Grid>   
      
    </Grid>
  );
}