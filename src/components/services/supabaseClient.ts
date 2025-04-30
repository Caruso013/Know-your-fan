// src/components/services/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Adicione suas credenciais aqui ou carregue-as de variáveis de ambiente
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verifique se as variáveis estão sendo carregadas corretamente
console.log(supabaseUrl, supabaseKey);

export const supabase = createClient(supabaseUrl, supabaseKey);
