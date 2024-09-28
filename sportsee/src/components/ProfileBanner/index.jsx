import '../../style/profileBanner.css'
/**
 * Créer la bannière de la page profile
 * @param {string} name Nom de l'utilisateur
 * @param {string} motivLine Texte qui apparait sous le nom de l'utilisateur
 * @returns {React.JSX.Element}
 */
export default function ProfileBanner({name = 'User', motivLine = 'Bravo ?'}) {
  return (
    <section className='profileBanner'>
      <h1>Bonjour <span>{name}</span></h1>
      <p>{motivLine}</p>
    </section>
  )
}
