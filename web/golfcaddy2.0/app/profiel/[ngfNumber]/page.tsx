"use client";
import ChatComponent from "@/public/components/molecules/ChatComponent";
import { Golfer } from "@/public/models/golfer.model";
import React from "react";
import { use, useEffect, useState } from "react";

export default function ngfNumber({
  params: { golfer },
}: {
  params: { golfer: Golfer };
}) {
  const [user, setUser] = useState<Golfer | null>(null);

  useEffect(() => {
    const golferString = localStorage.getItem("golfer");

    if (golferString) {
      const golfer: Golfer = JSON.parse(golferString);

      setUser(golfer);
    }
  }, []);

  return <div>hello {user && user.name}
  <ChatComponent/></div>;
}
