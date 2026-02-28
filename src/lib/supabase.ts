import { createClient } from '@supabase/supabase-js';

// En Cloudflare Pages/Workers, las variables de entorno se obtienen del contexto
// de ejecución (env), no de import.meta.env en tiempo de compilación/ejecución normal.
export function createSupabaseClient(env: any) {
    const supabaseUrl = env.PUBLIC_SUPABASE_URL || import.meta.env.PUBLIC_SUPABASE_URL;
    const supabaseKey = env.PUBLIC_SUPABASE_ANON_KEY || import.meta.env.PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
        console.warn('Supabase URL or Anon Key is missing. Check your Cloudflare or local environment variables.');
    }

    return createClient(
        supabaseUrl || 'https://placeholder.supabase.co',
        supabaseKey || 'placeholder-key'
    );
}
