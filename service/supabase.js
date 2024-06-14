import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_ANON_KEY,
);

const roomChat = supabase.channel("room1");

roomChat.subscribe((status) => {
  if (status === "SUBSCRIBED") {
    console.log("Subscribed to room1");
  } else {
    console.log("Subscription status:", status);
  }
});

export default roomChat;
