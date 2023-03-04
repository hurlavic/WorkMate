import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const supabaseUrl = 'https://zutyxnhjcpbwjqspkrnl.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp1dHl4bmhqY3Bid2pxc3Brcm5sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc5NDg1NTMsImV4cCI6MTk5MzUyNDU1M30.WYxIgdz0StLeDzzjwqv7iu3ptxore5_tqZyMf2pCzVw'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)