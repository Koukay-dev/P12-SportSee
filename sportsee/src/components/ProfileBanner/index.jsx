import '../../style/profileBanner.css'

export default function ProfileBanner({name = 'User', motivLine = 'Bravo ?'}) {
  return (
    <section className='profileBanner'>
      <h1>Bonjour <span>{name}</span></h1>
      <p>{motivLine}</p>
    </section>
  )
}
