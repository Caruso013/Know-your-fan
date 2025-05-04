import { supabase } from './services/supabaseClient';

export const UploadDocument = async (file: File) => {
  const { error } = await supabase.storage
    .from('documentos')
    .upload(`public/${file.name}`, file);

  if (error) {
    console.error('Upload error:', error.message);
    throw error;
  }
};
