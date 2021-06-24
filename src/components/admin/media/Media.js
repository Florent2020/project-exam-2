// // import { useState, useEffect } from "react";
// // import PropTypes from "prop-types";
// // // import useAxios from "../../../hooks/useAxios";
// // import axios from "axios";
// // import ValidationForm from "../../forms/ValidationError"
// // import { useForm } from "react-hook-form";
// // import * as yup from "yup";
// // import { yupResolver } from "@hookform/resolvers/yup";



// import React from "react";
// import axios from "axios";
// import { render } from "@testing-library/react";

// export default class Media extends React.Component {
//     // const [serverError, setServerError] = useState(null);
//     // const [submitting, setSubmitting] = useState(false);
// 	// // const [media, setMedia] = useState([]);

// 	// // const http = useAxios();

//     // const schema = yup.object().shape({
//     //     image: yup.string().required("Name is required"),
//     // });

//     // const { register, formState: { errors } } = useForm({
// 	// 	resolver: yupResolver(schema),
// 	// });

// 	// useEffect(function () {
// 	// 	async function getMedia() {


// 	// 		try {
// 	// 			const response = await axios.get("http://localhost:1337/upload");
// 	// 			console.log("response", response.data);
// 	// 			// setMedia(response.data);
// 	// 		} catch (error) {
// 	// 			console.log(error);
//     //             setServerError(error.toString());
// 	// 		} finally {
//     //             setSubmitting(false);
//     //         }
// 	// 	}

// 	// 	getMedia();
// 	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
// 	// }, []);

// 	// return (
//     //         <div>
// 	// 			<input name="alo" type="file" placeholder="image" defaultValue={submitting.image} {...register("image")} />
// 	// 			{errors.image && <ValidationForm>{errors.image.message}</ValidationForm>}
// 	// 		</div>


// 	// );


// //     const [file, setFile] = useState(false);
// //   const handleInputChange = (event) => {
// //     setFile(event.target.files[0]);
// //   };
// //   const upload = (e) => {
// //     let formData = new FormData();
// //     formData.append("files", file);
// //     axios({
// //       method: "post",
// //       url: "http://localhost:1337/upload",
// //       data: formData
// //     }).then(({ data }) => {
// //       console.log("Succesfully uploaded: ", JSON.stringify(data));
// //     });
// //   };

// //   return (
// //     <div>
// //       <input type="file" onChange={handleInputChange} />
// //       <br />
// //       <br />
// //       <button onClick={upload}>Upload File</button>
// //     </div>
// //   );

//      state = {
//         file: null
//     }

//       handleChange = (e) => {

//         console.log("FileUpload.handleChange this.file", this.files)
//         this.setState({file: this.files})
//     }

//       handleSubmit = async (e) => {

//         console.log("FileUpload.handleSubmit this.state.file", this.state.file)
//         const data = new FormData()
//         data.append('files', this.state.file)

//         const upload_res = await axios ({
//             method: 'POST',
//             url: 'http://localhost:1337/upload',
//             data
//         })

//         console.log("FileUpload.handleSubmit upload_res", upload_res)

//     }

//     render() {
//         return(
//             <div className="FileUpload">
//                 <form onSubmit={this.handleSubmit}>
//                     <input onChange={this.handleChange} type="file" />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

// // Media.propTypes = {
// // 	register: PropTypes.func,
// // };

// // Media.defaultProps = {
// // 	register: () => {},
// // };