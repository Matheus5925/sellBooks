import { Link} from 'react-router-dom';
import './index.scss';

export default function CardOfProducts(props) {
    const {name, description, pathToSite, pathToImg} = props;
    return(
       <Link to={pathToSite} target='_blank'>
         <div className='principal-cardofproduct'>
            <div className="cover-books">
                <img src={pathToImg} alt="Cover the books" />
            </div>
            <div className='title-description-card'>
                <div className='title-card'>
                    <h2>{name}</h2>
                </div>
                <div className='description-card'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
       </Link>
        
    )
}