import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bdfhlovnmfjaqofgjsyl.supabase.co'
const supabaseKey ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJkZmhsb3ZubWZqYXFvZmdqc3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODkzNDQ3NTgsImV4cCI6MjAwNDkyMDc1OH0.dpDCDoD-ySUbQKZ9awW6PG0Lv8SqtzNq05xeaTKTCFs';
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
//it is a client for interacting with supabase