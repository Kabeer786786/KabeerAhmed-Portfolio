import ContactForm from "../components/contact/ContactForm";
import Map from "../components/contact/Map";
import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("I’d love to hear from you! Let’s work together or just have a chat.");

  const handleMessage = (content) => {
    setMessage(content);
    setTimeout(() => {
      setMessage("I’d love to hear from you! Let’s work together or just have a chat.");
    }, 5000);
  };
  const handleEffects = () => {
    const ackMessageElement = document.getElementById("acknowledgemsg");
    ackMessageElement.classList.add("opacity-0"); // Fade out
    setTimeout(() => {
      ackMessageElement.classList.remove("opacity-0"); // Fade in
      ackMessageElement.classList.add("opacity-100");
    }, 300); // Delay for fade effect
  }

  return (
    <div className="p-4 md:pt-12 pb-20" style={{overflowY:"auto",maxHeight:"80vh"}}>
      <p id="acknowledgemsg" onChange={handleEffects} className="text-base md:text-lg lg:text-xl text-center font-semibold xl:-mt-6 animate-pulse opacity-100 transition-opacity duration-500 acknowledgemsg">{message}</p>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 m-auto pt-6">
        <ContactForm handleMessage={handleMessage} />
        <Map />
      </div>
    </div>
  );
};

export default Contact;
