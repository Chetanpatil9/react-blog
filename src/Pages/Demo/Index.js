import { useState, useEffect } from 'react'

const Common = () =>{
    const [data, setData] = useState([])

    const fetchData = () =>{
        return fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=90b5566f6c314946a71f7e0be8d307c4')
                    .then((response)=>{
                        return response.json();

                    })
                    .then((res)=>{
                        setData(res.articles);
                        console.log(res.articles)
                    })
    }

    useEffect(() =>{
        fetchData()
    }, [])


    return(
        <div>
            <h1>API Call</h1>
            {
                data.map((element ,index ) => (
                        <div key = {element.id}>
                            <h1>name: {element.author}</h1>
                            <h3> {element.content}</h3>
                            <img src={element.urlToImage} alt="images"/>
                        </div>
                    ))
                    // console.log(data)
            }
        </div>
    )
}

export default Common