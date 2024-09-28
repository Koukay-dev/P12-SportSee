import "../../style/averageSessionsChart.css";

import {
  LineChart,
  XAxis,
  Line,
  ResponsiveContainer,
  Tooltip,
  YAxis,
} from "recharts";

const days = ["L", "M", "M", "J", "V", "S", "D"];

const ASCustomTooltip = ({ active = false, payload = []}) => {
    if (active && payload && payload.length) {
      return (
        <div className="AS-custom-tooltip">
          <p className="label">{payload[0].value} min</p>
        </div>
      );
    }
  
    return null;
  };

export default function AverageSessionsChart({ data }) {
  const fadedWhite = { fill: "#FFFFFF80"};

  const averageSessions = data.sessions.map((session) => {
    return {
      day: days[session.day - 1],
      length: session.sessionLength,
    };
  });
  console.log(averageSessions);
  return (
    <article className="average-sessions-chart">
      <ResponsiveContainer>
        <LineChart  margin={{ top: 0, right: -1, left: -1, bottom: 0 }} data={averageSessions}>
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={fadedWhite}
            axisLine={false}
            stroke="#FFFFFF80"
          />
          <YAxis
            hide
            dataKey="length"
            domain={["dataMin - 20", "dataMax + 20"]}
          />
          <Line
            type="natural"
            dataKey="length"
            stroke="#FFFFFF80"
            strokeWidth={3}
            dot={false}
          />
          <Tooltip content={<ASCustomTooltip/>}/>
        </LineChart>
      </ResponsiveContainer>
    </article>
  );
}
