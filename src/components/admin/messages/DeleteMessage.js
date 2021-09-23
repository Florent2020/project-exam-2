import { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import useAxios from "../../../hooks/UseAxios";
import { BASE_URL } from "../../../constants/api";
import Button from "react-bootstrap/Button";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function DeleteMessages({ id }) {
  const [error, setError] = useState(null);

  const http = useAxios();
  const history = useHistory();

  const url = BASE_URL + `/messages/${id}`;

  function deleteMessage() {
    confirmAlert({
      title: "Are you sure you want to delete this message???",
      buttons: [
        {
          label: "yes",
          onClick: () => handleDelete(),
        },
        {
          label: "cancel",
        },
      ],
    });
  }

  async function handleDelete() {
    try {
      await http.delete(url);
      history.push("/admin/messages");
    } catch (error) {
      setError(error);
    }
  }

  return (
    <Button
      variant="warning"
      type="submit"
      name="delete--message"
      className="delete--message"
      onClick={deleteMessage}
    >
      <i className="fas fa-trash"></i>
      {error ? "Error" : "Delete"}
    </Button>
  );
}

DeleteMessages.propTypes = {
  id: PropTypes.number.isRequired,
};
