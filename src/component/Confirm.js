import Dialog from "material-ui/Dialog";
import AppBar from "material-ui/AppBar";
import MuiThemeProvider from "material-ui/styles/muiThemeable";
import Button from "material-ui/RaisedButton";
import React, { Component } from "react";
import List from "material-ui/List";
import { ListItem,ListItem as ListItemText } from "material-ui";

export class Confirm extends Component {
    continue = e => {
      e.preventDefault();
      // PROCESS FORM //
      this.props.nextStep();
    };
  
    back = e => {
      e.preventDefault();
      this.props.prevStep();
    };
  
    render() {
      const {
        values: { firstName, lastName, email, occupation, city, bio }
      } = this.props;
      return (
        <MuiThemeProvider>
          <>
            <Dialog
              open
              fullWidth
              maxWidth='sm'
            >
              <AppBar title="Confirm User Data" />
              <List>
                <ListItem>
                  <ListItemText primary="First Name" secondary={firstName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Last Name" secondary={lastName} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Email" secondary={email} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Occupation" secondary={occupation} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="City" secondary={city} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Bio" secondary={bio} />
                </ListItem>
              </List>
              <br />
  
              <Button
                color="secondary"
                variant="contained"
                onClick={this.back}
              >Back</Button>
  
              <Button
                color="primary"
                variant="contained"
                onClick={this.continue}
              >Confirm & Continue</Button>
            </Dialog>
          </>
        </MuiThemeProvider>
      );
    }
  }
  
  export default Confirm;
