import { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import useAxios from "../../../hooks/UseAxios";
import { BASE_URL } from "../../../constants/api";
import Button from 'react-bootstrap/Button';
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function DeleteEnquiries({ id }) {
	const [error, setError] = useState(null);

	const http = useAxios();
	const history = useHistory();

	const url = BASE_URL + `/enquiries/${id}`;

    function deleteEnquiry() {
        confirmAlert({
            title: "Are you sure you want to delete this enquiry???",
            buttons: [
              {
                label: "yes",
                onClick: () => handleDelete(),
              },
              {
                label: "cancel",
              },
            ],
          })
    }

	async function handleDelete() {
		try {
			await http.delete(url);
			history.push("/admin/enquiries");
      window.location.reload();
		} catch (error) {
			setError(error);
		}
	}

	return (
		// <button type="button" className="delete" onClick={handleDelete}>
		// 	{error ? "Error" : "Delete"}
		// </button>

                <Button variant="warning" type="submit" name="delete enquiry" className="delete--enquiry" onClick={deleteEnquiry}>
                    <i className="fas fa-trash" onClick={deleteEnquiry}></i>
                    {error ? "Error" : "Delete"}
                </Button>
              // <>
              //   <i className="fas fa-trash" onClick={deleteEnquiry}>{error ? "Error" : "Delete"}</i>

              // </>
            );
}

DeleteEnquiries.propTypes = {
	id: PropTypes.number.isRequired,
};