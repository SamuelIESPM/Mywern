import { createClient } from "@supabase/supabase-js";

const supabaseConnection = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

export { supabaseConnection };
