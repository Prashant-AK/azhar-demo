import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const EditInfo = (props) => {
  const { populate, handleSubmit, id } = props;
  const [data, setData] = useState(populate);
  // console.log("populate", populate);
  return (
    <Paper align="center">
      <Typography variant="h3"> Edit form </Typography>
      <form onSubmit={handleSubmit(id, data)}>
        <Stack>
          <Grid container>
            <Grid xs={6}>
              {" "}
              <TextField
                id="standard-basic"
                label="Notification Id"
                variant="standard"
                value={data.notificationId}
                type="text"
              />{" "}
            </Grid>
            <Grid xs={6}>
              <TextField
                id="standard-basic"
                label="Sender UID"
                variant="standard"
                type="text"
                value={data.senderUid}
              />
            </Grid>
          </Grid>

          <Grid container>
            <Grid xs={12}>
              <TextField
                id="standard-basic"
                label="Message"
                variant="standard"
                value={data.message}
                onChange={(
                  e //console.log(e.target.value)
                ) => setData({ ...data, [data.message]: e.target.value })}
              />
            </Grid>
          </Grid>
          <Button type="submit">Submit</Button>
        </Stack>
      </form>
    </Paper>
  );
};

export default EditInfo;
