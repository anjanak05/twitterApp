import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";
import axios from "axios";

function SignUp() {
  const [userSignupData, setUserSignupData] = useState({
    userName: "",
    fullName: "",
    email: "",
    password: "",
    avatar: "",

  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserSignupData({
      ...userSignupData,
      [name]: value,
    });
  };
  console.log(userSignupData)

  const handleSubmit = () => {
    if (userSignupData.password.length < 8 || userSignupData.password === "") {
      alert("Week Password please fill 8 or more digits");
      return false;
    }
    return axios
      .post(
        `http://localhost:9090/user`,
        userSignupData
      )
      .then((res) => {
        console.log(res);
        alert("Registrations successfully!");
        // navigate('/UserLogin');
      })
      .catch((error) => {
        
          console.log(error);
        
      });
  };

  return (
    <MDBContainer fluid>
      <MDBCard
        className="text-black mx-auto"
        style={{ borderRadius: "25px", backgroundColor: "#eee", width: "70%" }}
      >
        <MDBCardBody>
          <MDBRow>
            <MDBCol
              md="10"
              lg="6"
              className="order-2 order-lg-1 d-flex flex-column align-items-center"
            >
              <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                Sign up
              </p>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput onChange={handleChange}
                  name="fullName"
                  value={userSignupData.fullName}
                  label="Your Name"
                  id="form1"
                  type="text"
                  className="w-100"
                />
              </div>
              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput onChange={handleChange}
                  name="userName"
                  value={userSignupData.userName}
                  label="User Name"
                  id="form1"
                  type="text"
                  className="w-100"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size="lg" />
                <MDBInput onChange={handleChange}
                  name="email"
                  value={userSignupData.email}
                  label="Your Email"
                  id="form2"
                  type="email"
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size="lg" />
                <MDBInput onChange={handleChange}
                  name="password"
                  value={userSignupData.password}
                  label="Password"
                  id="form3"
                  type="password"
                  required
                />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="user me-3" size="lg" />
                <MDBInput onChange={handleChange}
                  name="avatar"
                  value={userSignupData.avatar}
                  label="Enter image url"
                  id="form4"
                  type="url"
                />
              </div>

              <div className="mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Subscribe to our newsletter"
                />
              </div>

              <MDBBtn className="mb-4" size="lg" onClick={handleSubmit}>
                Register
              </MDBBtn>
            </MDBCol>

            <MDBCol
              md="10"
              lg="6"
              className="order-1 order-lg-2 d-flex align-items-center"
            >
              <MDBCardImage
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                fluid
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default SignUp;
