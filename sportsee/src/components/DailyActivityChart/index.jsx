import "../../style/dailyActivityChart.css";
import {
  BarChart,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Rectangle
} from "recharts";
import DailyActivityLegend from "../DailyActivityLegend";

const DACustomTooltip = ({ active = false, payload = [], label = '' }) => {
  if (active && payload && payload.length) {
    return (
      <div className="DA-custom-tooltip">
        <p className="label">{payload[0].value}kg</p>
        <p className="label">{payload[1].value}Kcal</p>
      </div>
    );
  }

  return null;
};

const DACustomCursor = (props) => {
  const {width,x, y ,height} = props;
  return (
    <Rectangle
      fill="rgba(196, 196, 196, 0.50)"
      stroke="none"
      x={x - 35} 
      y={y}
      width={width + 70}
      height={height} 
    />
  );
};

export default function DailyActivityChart({ data = {} }) {
  const sessions = data.sessions.map((session) => {
    return {
      day: parseInt(session.day.split("-")[2]),
      kilogram: session.kilogram,
      calories: session.calories,
    };
  });
  return (
    <article className="daily-activity-chart">
      <div className="DA-title-legend">
        <h3>Activité quotidienne</h3>
        <div className="DA-legend">
          <DailyActivityLegend fillColor="#282D30" text="Poids (kg)" />
          <DailyActivityLegend fillColor="#E60000" text="Calories brûlées (kCal)" />
        </div>
      </div>
      <ResponsiveContainer height={250}>
        <BarChart
          data={sessions}
          margin={{ top: 50, right: 30, left: 45, bottom: 30 }}
        >
          <CartesianGrid vertical={false} stroke="#DEDEDE" strokeDasharray="3 3" />
          <XAxis
            tickMargin={20}
            padding={{ left: 9, right: 8 }}
            scale="point"
            tickLine={false}
						axisLine={{ stroke: "#DEDEDE" }}
						tick={{ fill: "#9B9EAC" }}
            dataKey="day"
          />
          <YAxis
            tickMargin={45}
            axisLine={false}
            tickLine={false}
						tick={{ fill: "#9B9EAC" }}
            domain={["dataMin - 2", "dataMax +2"]}
            yAxisId="kilogram"
            dataKey="kilogram"
            orientation="right"
          />
          <YAxis hide yAxisId="calories" orientation="left" />
          <Tooltip content={<DACustomTooltip />} cursor={<DACustomCursor/>} />
          <Bar
            dataKey="kilogram"
            barSize={7}
            fill="#282D30"
            radius={[7, 7, 0, 0]}
            yAxisId="kilogram"
          />
          <Bar
            dataKey="calories"
            barSize={7}
            fill="#E60000"
            radius={[7, 7, 0, 0]}
            yAxisId="calories"
          />
        </BarChart>
      </ResponsiveContainer>
    </article>
  );
}
