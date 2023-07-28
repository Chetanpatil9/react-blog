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
            <ImageCard src='https://images.unsplash.com/photo-1474432978580-3d2a63f706e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFya25lc3N8ZW58MHx8MHx8&w=1000&q=80' />
          </div>
          <div className='home-dis-2'>
            <div className='in-div-dis'>
              <ImageCard src='https://th.bing.com/th/id/R.4ce8a894b4382b49f26cc16a62cd9545?rik=RTd6oQQPjHWRcw&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fct871tX.jpg&ehk=9ut5DudbIVxhGCORhypUJgkeYq7nH89xKUCWOWixn%2bU%3d&risl=&pid=ImgRaw&r=0' />

            </div>
            <div className='in-div-dis'>
              <ImageCard src='https://www.nsbpictures.com/wp-content/uploads/2021/12/Dark-Cyber-scaled.jpg' />

            </div>
          </div>
        </div>

        <h1 style={{ marginTop: "40px" }}>The Latest</h1>
        <hr style={{ width: "200px", thickness: "20px" }} />
        <div className='home__main'>
        <div className='div_width'>
          {data
            .filter((article) => {
              return article.category === "bollywood";
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
              return article.category === "food";
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
              return article.category === "footer1";
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
              return article.category === "footer2";
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
</div>
        
      </div>



    </>
  )
}

export default Home