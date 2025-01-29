import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../../../store/userSlice";
import FeedbackMessage from "../../../components/feedbackMessage";
import { UserRegistrationPageImages } from "../../../assets/images/user/userRegistrationPage/userRegistrationPageImages";
import MidScreenFloatingDivLayout from "../../../components/midScreenFloatingDivLayout";
import BackButtonWithCustomPath from "../../../components/backButtonWithCustomPath";
import { Navigate, useNavigate } from "react-router-dom";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [adderess, setAdderess] = useState("");
  const [company, setCompany] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState();
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (firstName === lastName) {
      setFeedback("First Name cant be same as Last Name");
      setShowFeedback(true);
      setTimeout(() => {
        setShowFeedback(false);
      }, 3000);
      setFirstName("");
      setLastName("");
    } else {
      try {
        var user = {
          firstName,
          lastName,
          adderess,
          company,
          telephoneNumber,
        };
        dispatch(createUser(user));
        console.log(user);
        setFeedback("User Added Successfully");
        setShowFeedback(true);
        setTimeout(() => {
          setShowFeedback(false);
        navigate("/allusers")
        }, 1500);

        setFirstName("");
        setLastName("");
        setTelephoneNumber("");
        setAdderess("");
        setCompany("");
      } catch (error) {
        console.log("Error");
      }
    }
  };

  const handleTelephoneChange = (e) => {
    const value = e.target.value;

    if (/^\d{0,11}$/.test(value) && value >= 0) {
      setTelephoneNumber(value); 
    }
  };

  return (
    <div>
      <div className="pl-3 pt-3">
      <BackButtonWithCustomPath path={"/"} />
      </div>
      <div className="w-[100%] bg-white py-10 px-6 md:mt-[9%] md:shadow-lg  md:w-[70%] lg:w-[60%] md:mx-auto  md:rounded-lg   ">
        <form
          className="flex flex-col gap-2 md:grid md:grid-cols-2 md:gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex items-center justify-center gap-2 md:col-span-2">
            <img
              src={UserRegistrationPageImages.enterData}
              className="w-7 md:w-11"
            />
            <h1 className="text-xl md:text-4xl font-semibold text-[#0E1326]">
              Fill the form
            </h1>
          </div>

          <input
            type="text"
            placeholder="First Name"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            pattern="^[A-Za-z\s]{3,10}$"
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Name can only have Alphabets in range from 3 to 10."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
            className="border border-2 border-gray-300 text-black py-2 md:py-3 md:pl-3 rounded-full text-center  md:rounded-lg focus:outline-none focus:ring-1 focus: ring-blue-300"
          />

          <input
            type="text"
            placeholder="Last Name"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            pattern="^[A-Za-z\s]{3,10}$"
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Name can only have Alphabets in range from 3 to 10."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
            className="border border-2 border-gray-300 text-black py-2 md:py-3 md:pl-3 rounded-full text-center  md:rounded-lg focus:outline-none focus:ring-1 focus: ring-blue-300"
          />

          <input
            type="text"
            placeholder="Address"
            required
            value={adderess}
            onChange={(e) => setAdderess(e.target.value)}
            pattern="^[A-Za-z0-9\s\,\:\#\-\&\/]{3,100}$"
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Address can have Alphabets and numbers, Special characters allowed are , : # - & / whitespace"
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
            className="col-span-2 border border-2 border-gray-300 text-black py-2 md:py-3 md:pl-3 rounded-full text-center  md:rounded-lg focus:outline-none focus:ring-1 focus: ring-blue-300"
          />

          <input
            type="text"
            placeholder="Company"
            required
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            pattern="^[A-Za-z0-9\s\(\)\&\-]{3,20}$"
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Company can have Alphabets and numbers, Special characters allowed - ( ) & whitespace"
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
            className="border border-2 border-gray-300 text-black py-2 md:py-3 md:pl-3 rounded-full text-center  md:rounded-lg focus:outline-none focus:ring-1 focus: ring-blue-300"
          />

          <input
            type="number"
            placeholder="Telephone Number"
            required
            value={telephoneNumber}
            onChange={handleTelephoneChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Telephone Number can be of max length: 11 "
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
            className="border border-2 border-gray-300 text-black py-2 md:py-3 md:pl-3 rounded-full text-center  md:rounded-lg focus:outline-none focus:ring-1 focus: ring-blue-300"
          />

          <button className="col-span-2 bg-green-700 hover:bg-green-800 text-white px-3 py-2 md:py-3 rounded-full md:rounded-md ">
            Submit
          </button>
        </form>
        {showFeedback && (
          <MidScreenFloatingDivLayout
            child={<FeedbackMessage message={feedback} />}
          />
        )}
      </div>
    </div>
  );
};

export default AddUser;
