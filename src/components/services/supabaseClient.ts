import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jvqlhchdcuwygmtqdwhd.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp2cWxoY2hkY3V3eWdtdHFkd2hkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMjc0NjAsImV4cCI6MjA2MTYwMzQ2MH0.vBUbGKriQjwwmchpXw97HCd52NJQaYvvhmWXDa2-Jeg'; 

export const supabase = createClient(supabaseUrl, supabaseKey);