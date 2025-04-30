import { useState } from 'react';

const UploadDocument = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-4">
      <input type="file" onChange={handleUpload} className="block" />
      {file && (
        <p className="text-sm text-gray-600">Arquivo selecionado: {file.name}</p>
      )}
    </div>
  );
};

export default UploadDocument;
