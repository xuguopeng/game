const adsEnabled = process.env.NEXT_PUBLIC_ADS_ENABLED === 'true';

interface AdSlotProps {
  className?: string;
  label?: string;
}

export default function AdSlot({ className = '', label = 'Ad' }: AdSlotProps) {
  if (!adsEnabled) {
    return null;
  }

  return (
    <div className={`ad-slot ${className}`} aria-label={label}>
      <span>{label}</span>
    </div>
  );
}
