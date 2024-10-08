import '../../style/dailyActivityLegend.css'

export default function DailyActivityLegend({
  fillColor = "fill: #282D30;",
  text = "texte à remplir",
}) {
  return (
    <span className="legend-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8Z"
          fill={fillColor}
        />
      </svg>
      <span>{text}</span>
    </span>
  );
}
