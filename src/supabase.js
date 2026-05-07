import { createClient } from '@supabase/supabase-js';

// These should be in .env for security, but providing placeholders for setup
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'YOUR_SUPABASE_URL';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const logSwipe = async (cardId, cardTitle, result) => {
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
