import { NextApiRequest, NextApiResponse } from "next";
import { supabaseClient } from "../../lib/supabaseClient";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  supabaseClient.auth.api.setAuthCookie(req, res);
}