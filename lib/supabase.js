import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabase = createClient(supabaseUrl, supabaseKey);

export async function saveContactData(name, email, message) {
  const { data, error } = await supabase
    .from('contact_us')
    .insert([{ name: name, email: email, message: message }])
    .select();

  if (error) {
    console.error('Error saving contact data: ', error.message);
    throw new Error(error.message);
  }
  return data;
}

export async function saveFaq(faq) {
  const { data, error } = await supabase
    .from('faqs')
    .insert([{ faq: faq }])
    .select();

  if (error) {
    console.log('Error saving faq: ', error.message);
    throw new Error(error.message);
  }
  return data;
}

export async function getCodes() {
  const { data, error } = await supabase.from('codes').select('*');

  if (error) {
    console.log('Error getting codes: ', error.message);
    throw new Error(error.message);
  }
  return data;
}

export async function getCodeById(id) {
  const { data, error } = await supabase.from('codes').select('*').eq('id', id);

  if (error) {
    console.log('Error getting code: ', error.message);
    throw new Error(error.message);
  }
  return data;
}
