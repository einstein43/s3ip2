"use client";
import ChatComponent from "@/public/components/molecules/ChatComponent";
import { Golfer } from "@/public/models/golfer.model";
import React, { useEffect, useState } from "react";

export default function NgfNumber({
  params,
}: {
  params: { ngfNumber: string };
}) {
  const [user, setUser] = useState<Golfer>();

  const getGolfer = async () => {
    try {
      console.log(params.ngfNumber);
      const response = await fetch(
        `http://localhost:3001/golfer/ngf/${params.ngfNumber}`
      );
      const data = await response.json();
      console.log(data);

      setUser(data);
      console.log(data); // Instead of logging 'user', log 'data'
    } catch (error) {
      console.error("Error fetching golfer:", error);
    }
  };

  useEffect(() => {
    console.log("useEffect");
    getGolfer();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  useEffect(() => {
    if (user) {
      console.log("user", user);
      localStorage.setItem("golfer", JSON.stringify(user));
    }
  }, [user]); // Effect to run whenever 'user' changes

  return (
    <div>
      hello {user && user.name}
      <ChatComponent />
    </div>
  );
}
