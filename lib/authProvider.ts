import { Session } from "@supabase/supabase-js";
import { atom, useAtom } from "jotai";
import { useRouter } from "next/router";
import { supabaseClient } from "./supabaseClient";

export const sessionAtom = atom<Session | null>(supabaseClient.auth.session());

