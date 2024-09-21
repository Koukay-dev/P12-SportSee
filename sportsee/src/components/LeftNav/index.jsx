import "../../style/leftNav.css";
import NavIcon from '../NavIcon';

import sitIcon from '../../assets/img/sitIcon.svg'
import swimIcon from '../../assets/img/swimIcon.svg'
import bikeIcon from '../../assets/img/bikeIcon.svg'
import weigthIcon from '../../assets/img/weigthIcon.svg'


export default function LeftNav() {
  return (
    <nav className="leftNav">
        <div className="iconsLink">
            <NavIcon img={sitIcon} alt='Icone Yoga'/>
            <NavIcon img={swimIcon} alt='Icone Nage'/>
            <NavIcon img={bikeIcon} alt='Icone Velo'/>
            <NavIcon img={weigthIcon} alt='Icone Poids'/>
        </div>
        <p>Copyright, SportSee 2020</p>
    </nav>
  )
}
