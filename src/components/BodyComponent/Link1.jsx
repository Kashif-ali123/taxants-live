import React from "react";

import LinearStepper from "../../../src/LinearStepper";
import { CssBaseline, Container, Paper, Box } from "@material-ui/core";





 function Link1() {
  return (

    <>
    <CssBaseline />
    <Container component={Box} p={4}>
      <Paper component={Box} p={3}>
        <LinearStepper />
      </Paper>
    </Container>
  </>
  )
 
}
export default Link1;