"use server";

import { supabase } from "@/lib/supabase";

export async function submitContactForm(prevState: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Please fill in all required fields." };
  }

  // If Supabase isn't configured, mock success for now so the UI works
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  if (!supabaseUrl || supabaseUrl.includes("placeholder") || supabaseUrl.includes("your-supabase")) {
    console.log("Mock submission:", { name, email, subject, message });
    return { success: true, message: "Message sent successfully (Mocked - Database not connected yet)!" };
  }

  const { error } = await supabase
    .from("messages")
    .insert([{ name, email, subject, message }]);

  if (error) {
    console.error("Supabase Error:", error);
    return { error: "Failed to send message. Please try again later." };
  }

  return { success: true, message: "Message sent successfully!" };
}
