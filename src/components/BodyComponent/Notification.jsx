import React from "react";
import { useHistory } from "react-router-dom";

export default function Notification() {
  let history = useHistory();
  return (
    <div>
      <h1>Notifications</h1>
      <Button className="btn btn-primary" onClick={() =>{
  history.push("/");
}}>Logout</Button>
  
    </div>
  );
}
