import { createClient } from '@supabase/supabase-js';

// These should be in .env for security, but providing placeholders for setup
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Only initialize if keys are provided to prevent crash
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey) 
  : null;

export const logSwipe = async (cardId, cardTitle, result) => {
  if (!supabase) {
    console.warn('Supabase not initialized. Swipe not logged.');
    return null;
  }
  try {
    const { data, error } = await supabase
      .from('quiz_responses')
      .insert([
        { 
          card_id: cardId, 
          card_title: cardTitle, 
          result: result, // 'known' or 'new'
          timestamp: new Date().toISOString()
        }
      ]);
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error logging swipe:', error.message);
    // Silent fail to not interrupt UX
    return null;
  }
};
