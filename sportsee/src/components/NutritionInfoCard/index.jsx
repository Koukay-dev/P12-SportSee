import '../../style/nutritionInfoCard.css'

/**
 * Créé une carte qui associe un icone avec des valeurs,
 * exemple : fire icon with 1930kCal and Calories as the unit 
 * @param {string} img link to the icon image
 * @param {int} value the value you want to show, exemple: '150' 
 * @param {string} unitSymbol associated symbol of the unit, exemple: 'g' for grammes
 * @param {string} valueType what do you measure exemple: 'Calories', 'Proteines'
 * @returns {React.JSX.Element}
 */
export default function NutritionInfoCard({imgLink='' , value = 0,unitSymbol = 'l', valueType= 'Water'}) {
    value = value.toString()
    
    // Insérer une virgule avant les centaines si la valeur est un nombre à plus de trois chiffres
    if(value.length >= 4){
        const before = value.slice(0, -3);
        const after = value.slice(-3);
  
        value = before + ',' + after;
    }

  return (
    <div className='nutritionInfoCard'>
        <img src={imgLink} alt="" />
        <div className='nutritionInfoCard-text'>
            <p className='nutritionInfoCard-text-value'>{value+unitSymbol}</p>
            <p className='nutritionInfoCard-text-valueType'>{valueType}</p>
        </div>
    </div>
  )
}
