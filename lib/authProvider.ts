import { Session } from "@supabase/supabase-js";
import { atom } from "jotai";
import { supabaseClient } from "./supabaseClient";

export const sessionAtom = atom<Session | null>(supabaseClient.auth.session());

