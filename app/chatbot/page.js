"use client"

import Chat from "/components/Chats";
import NavBar from "/components/NavBar";

export const runtime = 'edge';

export default function ChatBot() {
  return(
    <div>
      <NavBar></NavBar>
      <Chat></Chat>
    </div>
  );
}