/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios"
import "../../assets/popup.css"
import confetti from "canvas-confetti";
// import { useNavigate } from 'react-router-dom';

export default function ContactForm({ handleMessage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });
  // const navigate = useNavigate();
  let celebrate = () => {
    const duration = 3 * 1000; // 5 seconds
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
      } else {
        confetti({
          particleCount: 50,
          startVelocity: 30,
          spread: 500,
          origin: { x: 0.5, y: 0 - 0.2 },
        });
      }
    }, 200);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // As it is a php file it should be in xampp server.
    axios
      .post("https://localhost:5000/con_contactForm.php", formData)
      .then((response) => {
        if (response.data.status === "success") {
          celebrate()
          try {
            setTimeout(() => {
              handleMessage(() => response.data.message)
              // Thank you 😊 for reaching out! I'll respond to you soon.
            }, 200);
          } catch (error) {
            console.log(error)
          }
          setFormData({
            name: "",
            email: "",
            comments: "",
          });
        } else {
          console.log(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="border-2 border-gray-500 p-4 text-gray-300 rounded-2xl w-[320px] md:w-[500px]" style={{ boxShadow: "0 0px 5px 1px rgba(215, 215, 215, 0.56)" }}>
      <form onSubmit={handleSubmit} >
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-lg font-bold hover:animate-pulse">Name</label>
          <input type="text" onChange={handleChange} value={formData.name} name="name" id="name" placeholder="Enter the Name..." className="p-2 pl-4 pr-4 rounded-md bg-gray-700" required />
        </div>
        <div className="flex flex-col pt-2">
          <label htmlFor="email" className="text-lg font-bold hover:animate-pulse">Email</label>
          <input type="email" onChange={handleChange} value={formData.email} name="email" id="email" placeholder="example@gmail.com" className="p-2 pl-4 pr-4 rounded-md bg-gray-700" required />
        </div>

        <div className="flex flex-col pt-2">
          <label htmlFor="comments" className="text-lg font-bold hover:animate-pulse">Comments</label>
          <textarea name="comments" onChange={handleChange} value={formData.comments} id="comments" rows={5} placeholder="Comments....." className="p-2 pl-4 pr-4 rounded-md bg-gray-700" required></textarea>
        </div>
        <div className="flex flex-col pt-3">
          <button type="submit" id="formsubmit" className="formsubmit bg-cyan-700 p-1 font-bold text-xl w-[80%] m-auto rounded-lg hover:bg-lime-700" >Submit</button>
        </div>
      </form>
    </div>
  )
}
