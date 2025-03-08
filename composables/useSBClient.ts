import { SupabaseClient } from "@supabase/supabase-js";

export const useSupabase = (): SupabaseClient => {
    const supabase = inject<SupabaseClient>("supabase");
    if (!supabase) {
        throw new Error("Error Initializing Supabase Client");
    }
    return supabase as SupabaseClient;
}