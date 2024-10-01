import "../../style/averageSessionsChart.css";

import {
  LineChart,
  XAxis,
  Line,
  ResponsiveContainer,
  Tooltip,
  YAxis,
  Rectangle,
} from "recharts";

const days = ["L", "M", "M", "J", "V", "S", "D"];

const ASCustomTooltip = ({ active = false, payload = [] }) => {
  if (active && payload && payload.length) {
    return (
      <div className="AS-custom-tooltip">
        <p className="label">{payload[0].value} min</p>
      </div>
    );
  }

  return null;
};

const ASCustomCursor = (props) => {
  const { points, width} = props;
  const { x, y } = points[0];
  console.log(props);
  return (
    <Rectangle
      fill="rgba(0, 0, 0, 0.0975)"
      stroke="none"
      x={x}
      y={y}
      width={width}
      height={350}
    />
  );
};

const ASCustomAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x}, ${y}) scale(1)`}> {/* Application de scaleX */}
      <text
        x={27}
        y={0}
        dy={10}
        textAnchor="middle" // Centre le texte
        fill="#FFFFFF80"
      >
        {payload.value}
      </text>
    </g>
  );
};

export default function AverageSessionsChart({ data }) {

  const averageSessions = data.sessions.map((session) => {
    return {
      day: days[session.day - 1],
      length: session.sessionLength,
    };
  });
  
  return (
    <article className="average-sessions-chart">
      <h3>Durée moyenne des<br/>sessions</h3>
      <ResponsiveContainer>
        <LineChart
          margin={{ top: 0, right: -1, left: -1, bottom: 0 }}
          data={averageSessions}
        >
          {/* Définition du dégradé */}
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.5)" />
              <stop offset="30%" stopColor="rgba(255, 255, 255, 0.7)" />
              <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <XAxis
            className="AS-XAxis"
            dataKey="day"
            tickLine={false}
            tick={<ASCustomAxisTick/>}
            axisLine={false}
            stroke="#FFFFFF80"
            interval="preserveStartEnd"
            padding={''}
          />
          <YAxis
            hide
            dataKey="length"
            domain={["dataMin - 10", "dataMax + 30"]}
          />
          <Line
            type="natural"
            dataKey="length"
            stroke="url(#lineGradient)"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 6,
              stroke: "rgba(255, 255, 255, 0.2)",
              strokeWidth: 16,
              fill: "rgba(255, 255, 255, 1)",
            }}
          />
          <Tooltip content={<ASCustomTooltip />} cursor={<ASCustomCursor />} />
        </LineChart>
      </ResponsiveContainer>
    </article>
  );
}
