import React, { useContext } from 'react'
import './Home.css'
import './Bollywood.css'
import './Hollywood.css'
import ImageCard from './ImageCard'
import CardHome from './CardHome'
import Card from './Card'
import { store } from './Details'

const Home = () => {
  const [data] = useContext(store)
  console.log(data)
  return (
    <>
      <div className='Home'>

        <div className='home-image'>
          <div className='home-dis-1'>
            <ImageCard src='https://cdn.zeebiz.com/sites/default/files/2023/08/11/255865-new-parliament-reuters.jpg?im=FitAndFill=(1200,900)' />
          </div>
          <div className='home-dis-2'>
            <div className='in-div-dis'>
              <ImageCard src='https://images.unsplash.com/photo-1679008980275-1f7168d0bbcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' />

            </div>
            <div className='in-div-dis'>
              <ImageCard src='https://indiatechnologynews.in/wp-content/uploads/2023/06/energy-saving-sustainability-800x400.jpg' />

            </div>
          </div>
        </div>

        <h1 style={{ marginTop: "40px" }}>The Latest</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />
        <div className='home__main'>
       
        <div className='div_width'>
          {data
            .filter((article) => {
              return article.category === "technology";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className='div_width'>
          {data
            .filter((article) => {
              return article.category === "war";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className='div_width'>
          {data
            .filter((article) => {
              return article.category === "bollywood1";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        </div>

        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Articles
        </h1>

        <div className="rightbar2">
          {data
            .filter((article) => {
              return article.category === "mix";
            })
            .map((n) => (
              <Card
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        
        <h1 style={{ marginTop: "40px", display: "inline-block" }}>
          Latest Stories
        </h1>
        <hr />

<div className='home__main'>

        <div className='div_width'>
          {data
            .filter((article) => {
              return article.category === "footer3";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className='div_width'>
          {data
            .filter((article) => {
              return article.category === "war";
            })
            .map((n) => (
              <CardHome
                key={n.id}
                articleid={n.id}
                imgUrl={n.img}
                title={n.title}
                description={n.description.slice(0, 200)}
                author={n.author}
              />
            ))}
        </div>
        <div className='advertisement'>Advertisement</div>
         
      </div>

      </div>



    </>
  )
}

export default Home