import { Link, Grid, Card } from '@mui/material';
import { AppWrapper } from '@component/AppWraper';

export function XopsPage() {
  return (
    <AppWrapper>
      <Card variant="outlined">
        <Grid container spacing={2}>
            <Grid item xs={8}>
              <video width="100%" controls>
                <source src="https://xpream.gmf-aeroasia.co.id/uploads/xops_guide.mp4" type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </Grid>
            <Grid item xs={4}>
              If you are using Android. Click button below
              <Link component="button" href="https://gmfaeroasia365-my.sharepoint.com/personal/582276_gmf-aeroasia_co_id/_layouts/15/onedrive.aspx?id=%2Fpersonal%2F582276%5Fgmf%2Daeroasia%5Fco%5Fid%2FDocuments%2Fxops%2Fxops%2Dbeta%2Dv1%2E2%2Eapk&parent=%2Fpersonal%2F582276%5Fgmf%2Daeroasia%5Fco%5Fid%2FDocuments%2Fxops&ga=1">Download APK</Link>
            </Grid>
          </Grid>
      </Card>
    </AppWrapper>
  );
}
