import "../../style/scoreChart.css";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";


/**
 * Affiche le graphique du score de l'objectif quotidien
 * @param {object} score 
 * @returns 
 */
export default function ScoreChart({ score }) {
  
  score = score * 100
  const data = [
    { name: "Progress", value: score },  // La partie remplie
    { name: "Rest", value: 100 - score }  // La partie vide
  ]

  return (
    <article className="scoreChart">
      <h3>Score</h3>
      <p><span>{score}%</span><br/> de votre objectif</p>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={67} // Rayon intérieur (pour un effet "anneau")
            outerRadius={80} // Rayon extérieur (taille de l'anneau)
            startAngle={90} // Début de la progression à 12h
            endAngle={450} // Fin de la progression à 12h
            paddingAngle={0} // Pas d'espace entre les portions
            dataKey="value" // Clé pour les valeurs
            stroke="none"
            cornerRadius={40}
          >
            
         <Cell  key={`cell-0`} fill={'#FF0000'} />
         <Cell key={`cell-1`} fill={'#FBFBFB'} />
            
          </Pie>
          <Pie
            data={[{ name: "InnerCircle", value: 100 }]} // Un seul segment pour le cercle blanc
            innerRadius={0} // Centre du cercle
            outerRadius={67} // La même taille que le rayon intérieur de la barre de progression
            fill="#FFFFFF"
            isAnimationActive={false}
          />
        </PieChart>
      </ResponsiveContainer>
    </article>
  );
}
