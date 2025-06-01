import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://sydrywtfkjgupvkcqflc.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN5ZHJ5d3Rma2pndXB2a2NxZmxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg3OTEzNzIsImV4cCI6MjA2NDM2NzM3Mn0.PZENPSUmx3DpUu-E3JF5cN5_e-11Rh7QfnnRbGhDl1M')
if (supabase == error) {
    console.log("ok so it didn't work sadly");
} else {
    console.log("oh wait that actually worked");
};