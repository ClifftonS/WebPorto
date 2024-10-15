import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "./ui/animated-modal";
import toast, { Toaster } from "react-hot-toast";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import MoonLoader from "react-spinners/MoonLoader";

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialvalues = {
    email: "",
    note: "",
  };

  const [data, setData] = useState(initialvalues);

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();

    if (data.note === "" || data.email === "") {
      setIsSubmitting(false);
      toast.error("Please enter all fields.");
      return;
    }

    try {
      await emailjs.sendForm("service_qt82ys9", "template_8lp05tc", form.current, { publicKey: "GxHVt3lHUcwz8JVlC" });
      setData(initialvalues);
      toast.success("Message sent.");
    } catch (error) {
      toast.error("Something went wrong.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setData(initialvalues);
  };
  return (
    <div className=" flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black justify-center relative inline-flex lg:w-60 md:h-12 md:w-48 w-32 h-8 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 group/modal-btn">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl" onClick={handleClick}>
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">Contact Me</span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">📨</div>
          </span>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-100 font-bold text-center mb-8">Contact Me</h4>
            <form ref={form} onSubmit={handleSubmit}>
              <div className="grid gap-2 mb-5">
                <label htmlFor="email" className="text-white">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-black text-white border border-white  rounded-lg p-3 "
                  id="email"
                  name="email"
                  placeholder="@gmail.com"
                  value={data.email}
                  onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                />
              </div>
              <div className="grid gap-2 mb-8">
                <label htmlFor="note" className="text-white">
                  Your message
                </label>
                <textarea
                  id="note"
                  className="bg-black text-white border border-white  rounded-lg p-4 "
                  rows={3}
                  name="note"
                  placeholder="Write text here..."
                  value={data.note}
                  onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })}
                />
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-white text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                  {isSubmitting ? (
                    <div className="flex gap-2 items-center justify-center">
                      <MoonLoader size={18} />
                    </div>
                  ) : (
                    <p>Send</p>
                  )}
                </button>
              </div>
            </form>
          </ModalContent>
        </ModalBody>
      </Modal>
      <Toaster />
    </div>
  );
}
