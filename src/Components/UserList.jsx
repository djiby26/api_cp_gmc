import axios from "axios";
import { useEffect, useState } from "react";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const UserList = () => {
  const [listOfUSer, setListOfUSer] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const results = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setListOfUSer(results.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  return (
    <div style={{ width: "50%", margin: "auto" }}>
      {listOfUSer.map((user) => (
        <Accordion key={user.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography fontWeight={800}>{user.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <span style={{ fontWeight: "600", fontSize: 17 }}>Username:</span>{" "}
              {user.username}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "600", fontSize: 17 }}>Email:</span>{" "}
              {user.email}
            </Typography>
            <Typography>
              <span style={{ fontWeight: "600", fontSize: 17 }}>Address:</span>{" "}
              {`street: ${user.address.street}, city: ${user.address.city}, suite: ${user.address.suite}`}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      {/* <div key={user.id}>
          <h4>{user.name}</h4>
        </div> */}
    </div>
  );
};

export default UserList;
