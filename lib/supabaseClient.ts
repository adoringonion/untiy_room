import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL !== undefined ? process.env.NEXT_PUBLIC_SUPABASE_URL : "https://supabase.io";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY !== undefined ? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY : "";

export const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);