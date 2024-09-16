import Chat from "/components/Chat";
import NavBar from "/components/NavBar"

export const runtime = 'edge';

export default function ChatBot() {
  return(
    <div>
      <NavBar></NavBar>
      <Chat></Chat>
    </div>
  );
}