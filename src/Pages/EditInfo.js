import React, { useState, useEffect } from "react";
import { Grid, Paper, Stack, TextField, Typography } from "@mui/material";

const EditInfo = (props) => {
  const { populate } = props;
  console.log("populate", populate);
  return (
    <Grid
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Paper elevation={24}>
        <Typography variant="h3"> Edit form </Typography>
        <form>
          <Stack>
            <Grid container>
              <Grid xs={12} sm={6}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="Sender"
                  variant="standard"
                  value={populate?.sender}
                  type="text"
                />{" "}
              </Grid>
              <Grid xs={12} sm={6}></Grid>
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
                type="email"
                value={populate?.email}
              />{" "}
            </Grid>

            <Grid container>
              <Grid xs={12}>
                {" "}
                <TextField
                  id="standard-basic"
                  label="message"
                  variant="standard"
                />{" "}
              </Grid>
            </Grid>
          </Stack>
        </form>
      </Paper>
    </Grid>
  );
};

export default EditInfo;
