import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://natownvvmiiwgoxukywc.supabase.co'

const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hdG93bnZ2bWlpd2dveHVreXdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3MTA3MzMsImV4cCI6MTk5MzI4NjczM30.C0NHixQsUB8jQ-5rgb6Q0n0reslU50y7pPItV8-zidg'

export const supabase = createClient(supabaseUrl, supabaseKey)