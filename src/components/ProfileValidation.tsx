import { useState } from 'react';

const ProfileValidation = () => {
  const [profileUrl, setProfileUrl] = useState('');
  const [validating, setValidating] = useState(false);
  const [result, setResult] = useState('');

  const validateProfile = () => {
    setValidating(true);
    setTimeout(() => {
      setResult('✅ Perfil parece relevante!');
      setValidating(false);
    }, 1500);
  };

  return (
    <div className="space-y-4">
      <input
        type="url"
        className="w-full p-2 border rounded"
        placeholder="Cole o link de um perfil (Faceit, HLTV, etc)"
        value={profileUrl}
        onChange={(e) => setProfileUrl(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        onClick={validateProfile}
        disabled={validating}
      >
        {validating ? 'Validando...' : 'Validar'}
      </button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default ProfileValidation;
