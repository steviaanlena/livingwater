export default function Logo({
  size = 48,
  className = "",
  light = false,
}: {
  size?: number;
  className?: string;
  light?: boolean;
}) {
  const circleStroke = light ? "#a9bfd3" : "#1e4a6e";
  const circleFill = light ? "rgba(255,255,255,0.1)" : "#edf2f8";
  const crossColor = light ? "#ffffff" : "#1e4a6e";
  const wave1 = light ? "#a9bfd3" : "#2d5f8a";
  const wave2 = light ? "#7e9fbd" : "#5380a7";
  const wave3 = light ? "#5380a7" : "#a9bfd3";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle */}
      <circle cx="60" cy="60" r="56" stroke={circleStroke} strokeWidth="2.5" fill={circleFill} />

      {/* Cross */}
      <line x1="60" y1="22" x2="60" y2="68" stroke={crossColor} strokeWidth="3.5" strokeLinecap="round" />
      <line x1="44" y1="38" x2="76" y2="38" stroke={crossColor} strokeWidth="3.5" strokeLinecap="round" />

      {/* Water drops / waves flowing from cross base */}
      <path
        d="M42 78 Q51 70 60 78 Q69 86 78 78"
        stroke={wave1}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M38 88 Q49 80 60 88 Q71 96 82 88"
        stroke={wave2}
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M34 98 Q47 90 60 98 Q73 106 86 98"
        stroke={wave3}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Small golden accent dots */}
      <circle cx="60" cy="18" r="2" fill="#d4a545" />
    </svg>
  );
}
