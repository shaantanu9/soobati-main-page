"use client";

import { useEffect, useState } from "react";

const NotifyMeForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isValidMail, setIsValidMail] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // regex for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (emailRegex.test(e.target.value)) {
      setIsValidMail(true);
    } else {
      setIsValidMail(false);
    }
  };

  const handleSubmit = () => {
    submitHandler();
  };

  const submitHandler = async () => {
    console.log(email);
    const res = await fetch("https://api.soobati.com/api/users/add-leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, ref: "soobati-main-page" }),
    });
  };

  useEffect(() => {
    if (isValidMail) {
      submitHandler();
    }
  }, [isValidMail]);

  return (
    <div>
      <input
        type="email"
        placeholder="Enter your email to stay updated"
        className="px-4 py-2 text-lg border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-xl text-black"
        onChange={handleChange}
        value={email}
      />
      <button
        onClick={handleSubmit}
        type="submit"
        className="mt-4 px-6 ml-2 py-2 bg-black text-white text-lg font-medium rounded-md hover:bg-blue-600"
      >
        Notify Me
      </button>
    </div>
  );
};

export default NotifyMeForm;
