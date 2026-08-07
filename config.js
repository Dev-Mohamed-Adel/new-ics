// config.js - Supabase Configuration
const SUPABASE_URL = "https://zipbobmaokofgdyrjubi.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppcGJvYm1hb2tvZmdkeXJqdWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5MDA5ODMsImV4cCI6MjEwMDQ3Njk4M30.7QergH1r3sSprj__zngkUV4-iwExhVNFRRKrqNCB9vU";

// دالة جلب العميل المباشر
function getSupabase() {
  if (window.supabaseClient) return window.supabaseClient;
  
  if (window.supabase && typeof window.supabase.createClient === 'function') {
    window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    return window.supabaseClient;
  }
  return null;
}