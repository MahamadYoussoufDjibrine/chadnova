-- Create a table for get-started requests
CREATE TABLE public.get_started_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  service TEXT NOT NULL,
  budget TEXT,
  timeline TEXT,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.get_started_requests ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (since this is a contact form)
CREATE POLICY "Anyone can submit get started requests" 
ON public.get_started_requests 
FOR INSERT 
WITH CHECK (true);

-- Create policy for viewing requests (only admins should see these)
-- For now, we'll make it restrictive - you can adjust this later
CREATE POLICY "Only authenticated users can view requests" 
ON public.get_started_requests 
FOR SELECT 
USING (false); -- No one can read for now - you'll need to adjust this based on your admin setup