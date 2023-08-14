import React from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'



const DetailPage = () => {
    const location = useLocation();
    const { title, img, description } = location.state;
    const mystyle = {
        color: "white",
        backgroundColor: "black",
        borderRadius: "8px",
        padding: '5px 20px'
    }
console.log(title)

    return (
        <div className='main'>
             <div className='single__page'>
        <h1>{title}</h1>
        <img src={img} alt="" />
        <p>{description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum deleniti incidunt illo ea reprehenderit commodi blanditiis impedit eaque! In ea nisi ad unde amet distinctio dignissimos odit iusto totam, nobis et rem accusantium quo est rerum eum molestiae minima exercitationem libero deleniti quibusdam incidunt repudiandae ex. Ratione dolor voluptates temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus recusandae eligendi impedit similique, saepe in. Illum sapiente dolorem nam inventore iure nobis voluptatum iusto veritatis similique consequatur temporibus natus eum cum vel ab quia laboriosam aspernatur perferendis quae, expedita mollitia! Vero consequuntur quasi provident sed tempore est aliquid. Animi officia rerum, aperiam atque quae nam commodi alias ipsum qui inventore laborum autem illum error est optio recusandae voluptates? Veritatis rem nemo, labore soluta doloremque quis asperiores impedit harum libero sequi adipisci dolorum dignissimos non quasi dolor ab quos molestias reiciendis quo maxime quas. Dolorum eaque dolore esse aperiam, iusto consectetur dolor illo. Nesciunt porro nobis facere possimus eum, nam quasi.</p>
    </div>
        
        <Link to="/"> <button style={mystyle}>Go Home</button> </Link>
        </div>
    )
}

export default DetailPage;