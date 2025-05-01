interface ProgressBarProps {
  xp: number; 
  nextLevelXP: number; 
}

export const ProgressBar = ({ xp, nextLevelXP }: ProgressBarProps) => {
  const percentage = (xp / nextLevelXP) * 100;

  return (
    <div className="w-full bg-gray-300 rounded-full h-4">
      <div
        className="bg-green-500 h-4 rounded-full"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};
