import '../../style/performanceChart.css'
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
} from "recharts";

/**
 * Affiche le graphique de performance
 * @param {object} data 
 * @returns 
 */
export default function PerformanceChart({ data = {} }) {
  // const performanceData = data.data.map((value, i) => {
  //   return {
  //     subject: trad[data.kind[value.kind]],
  //     value: value.value,
  //     fullMark: 250,
  //   };
  // });
  // const sortedPerformanceData = [];

  // Object.values(trad).forEach((subject) => {
  //   sortedPerformanceData.push(
  //     performanceData.find((element) => element.subject === subject)
  //   );
  // });

  return (
    <article className="performanceChart">
      <ResponsiveContainer>
        <RadarChart
          outerRadius={90}
          width={260}
          height={260}
          data={data}
          
        >
          <PolarGrid stroke='#FFFFFF' radialLines={false} polarRadius={[10, 20, 45, 70]}/>
          <PolarAngleAxis dataKey="subject" stroke="#FFFFFF" tickLine={false} tick={{ fontSize: 12, dy:3}}/>
          <Radar
            dataKey="value"
            fill="#FF0101"
            fillOpacity={0.7}
            
          />
        </RadarChart>
      </ResponsiveContainer>
    </article>
  );
}
