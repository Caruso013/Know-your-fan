import { useState } from 'react';
import { supabase } from './services/supabaseClient';

interface UploadProps {
  onUpload: (url: string) => void;
}

export function UploadDocument({ onUpload }: UploadProps) {
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setUploading(true);
      const file = e.target.files?.[0];
      if (!file) return;

      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const { error } = await supabase.storage.from('avatars').upload(fileName, file);

      if (error) throw error;

      const { data: publicUrlData } = supabase.storage.from('avatars').getPublicUrl(fileName);
      onUpload(publicUrlData.publicUrl);
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Erro ao fazer upload da imagem.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="my-4">
      <label className="block text-white mb-1">Upload da Foto:</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="text-white"
      />
      {uploading && <p className="text-sm text-gray-400">Enviando...</p>}
    </div>
  );
}
