
export default function Map() {
  return (
    <div className="flex items-center justify-center ">
    <div className="w-[320px] h-[320px] md:w-[450px] md:h-[450px] overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61421.60640139617!2d77.99860217836952!3d15.811840316525819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb5ddf506b7c6c9%3A0x19a7ac74f858d6f2!2sKurnool%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1735468547531!5m2!1sen!2sin"
        width={"100%"}
        height={"100%"}
        loading="lazy"
        className="opacity-80 hover:opacity-100 duration-500 transition-opacity"
        style={{ border: "2px solid rgba(106, 104, 107, 0.78)",  borderRadius:"50%",borderTopLeftRadius:"1rem",boxShadow:"0 0px 6px 1px rgba(215, 215, 215, 0.56)"}}
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map of Kurnool"
      ></iframe>
    </div>
  </div>
  )
}
