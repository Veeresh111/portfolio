import { createClient } from "@supabase/supabase-js";

let supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder-url.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

// Ensure URL is valid to prevent build crashes
if (!supabaseUrl.startsWith("http")) {
  supabaseUrl = "https://placeholder-url.supabase.co";
}

export const supabase = createClient(supabaseUrl, supabaseKey);
