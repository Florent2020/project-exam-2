import React from "react";
import Tabs from "react-bootstrap/Tabs";
import AdminAccommodations from "./AdminAccommodations";
import AddAccommodation from "./AddAdmin";
import MessagesAdmin from "./messages/MessagesAdmin";
import EnquiriesAdmin from "./enquiries/EnquiriesAdmin";

function Tab() {
  return (
    <div className="col-md">
      <Tabs defaultActiveKey="first" id="uncontrolled-tab-example">
        <Tab eventKey="overview" title="Overview">
          <div
            className="tab-pane fade"
            id="overview"
            role="tabpanel"
            aria-labelledby="add-tab"
          >
            <AdminAccommodations />
          </div>
        </Tab>
        <Tab eventKey="add" title="Add">
          <div
            className="tab-pane fade"
            id="add"
            role="tabpanel"
            aria-labelledby="add-tab"
          >
            <AddAccommodation />
          </div>
        </Tab>
        <Tab eventKey="messages" title="Messages">
          <div
            className="tab-pane fade"
            id="messages"
            role="tabpanel"
            aria-labelledby="messages-tab"
          >
            <MessagesAdmin />
          </div>
        </Tab>
        <Tab eventKey="enquiries" title="Enquiries">
          <div
            className="tab-pane fade"
            id="messages"
            role="tabpanel"
            aria-labelledby="messages-tab"
          >
            <EnquiriesAdmin />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default Tab;
