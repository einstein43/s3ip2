// src/components/ChatComponent.tsx
import React, { useState, useEffect } from "react";
import {
  initializeWebSocket,
  getSocket,
} from "../../services/websocketService";
import { Golfer } from "@/public/models/golfer.model";
import Image from "next/image";
import styles from "../../styles/molecules/chatcomponent.module.css";
const ChatComponent: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  type Message = string | { text: string; imageUrl: string };
  useEffect(() => {
    initializeWebSocket();
  
    const socket = getSocket();
  
    socket.on("message", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  
    return () => {
      socket.disconnect();
    };
  }, []);
  

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    try {
      const socket = getSocket();
      const user: Golfer = JSON.parse(localStorage.getItem("golfer") || "{}");
  
      const messageToSend: Message = {
        text: `${user.name}: ${newMessage}`,
        imageUrl: `https://flagsapi.com/${user.country}/shiny/64.png`, // Replace with the actual image URL
      };
  
      // Emitting the message through socket
      socket.emit("message", messageToSend);
  
      // No immediate state update here
      setNewMessage("");
    } catch (error: any) {
      console.error(error.message);
    }
  };
    return (
    <div>
      <div
        style={{
          height: "400px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
        }}
      >
        {messages.map((message, index) => (
          <div key={index}>
            {typeof message === "object" ? (
              <div id={styles.message_div}>
                 
                  <img
                    id={styles.message_image}
                    src={message.imageUrl}
                    alt="Message Image"
                  />
                 
                <p id={styles.message_text}>{message.text}</p>
              </div>
            ) : (
              <div>{message}</div>
            )}
          </div>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatComponent;
