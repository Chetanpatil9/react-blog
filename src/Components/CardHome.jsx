import React from 'react'
import { Link } from 'react-router-dom';
import './Home.css'

const CardHome = (props) => {
    const { imgUrl, title, description, articleid, techId } = props;
    return (
        <Link className='carttt' to="/DetailPage" state={{
            title: title,
            img: imgUrl,
            description: description,
            id: techId,
        }}>

           
           <div className={articleid}  >

               <div className='imgh_div'>

                <img src={imgUrl} alt="not found" /></div>

                <h3 className='head3'>{title}</h3>

            </div>
           

        </Link>
    )

}

export default CardHome;