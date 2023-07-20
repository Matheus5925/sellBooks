import './index.scss';
import book from '../../assets/img/book-header.png';

export default function HeaderPagePrincipal() {
    return(
        <header className='header-page-components'>
            <div className='title-logo'>
                <h1>Quality Books</h1>
                <img src={book} alt="Livro logo" />
            </div>
        </header>
    )
}