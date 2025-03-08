import { createClient } from '@supabase/supabase-js';

export default defineNuxtPlugin((app) => {
    const config = useRuntimeConfig();

    const supabase = createClient(config.public.SUPABASE_URL as string, config.public.SUPABASE_ANON_KEY as string);

    app.vueApp.provide('supabase', supabase);
});