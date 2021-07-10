import React from 'react';
import Form from "react-bootstrap/Form";

function SearchBox(props) {
    return (
        <div className="search--div">
            <Form.Group>
                    <i className="fas fa-search"></i>
                    <Form.Control
                        type="search"
                        className="search"
                        placeholder={props.placeholder}
                        onChange = {props.handleChange}
                     />

            </Form.Group>
        </div>
    )
}

export default SearchBox
