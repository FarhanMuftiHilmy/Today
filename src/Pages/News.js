import React, { Component } from 'react'
import '../App.css'
import { SiAddthis } from 'react-icons/si';
import { MdDeleteForever } from 'react-icons/md';
import { Center, SimpleGrid, Heading } from '@chakra-ui/react'

export default class News extends Component {
    constructor(){
        super();
        this.state = {articles: []}
    }
    componentDidMount(){
        fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=ebc66010bdb7467c9b994dea391ba423")
        .then(response => response.json())
        .then((articles) => {
            this.setState({articles: articles.articles})
        })
    }
    render() {
        const property = {
            title: 'News For You'
          }
        return (  
            <div id="news">
                <Center mt={8}>
                    <Heading fontSize={'4xl'} fontFamily={'body'}  mb={8} >
                        {property.title}
                    </Heading>
                </Center>
                <SimpleGrid columns={3} spacing="10px" padding={"20px"}>
                {
                    this.state.articles.map((dinamis, key)=>
                    <div class="gallery" key={dinamis.source.id}>
                    <a target="_blank" href={dinamis.url}>
                        {dinamis.urlToImage != null ? <img key={dinamis.urlToImage} src={dinamis.urlToImage}/> : <img src={window.location.origin + '/no_image_avaliable.jpg'} /> }
                    </a>    
                    {/* <div class="desc"><strong>{dinamis.title}</strong><br/><p>{dinamis.description}</p></div> */}
                    <div class="desc">{dinamis.title != null ? <><strong>{dinamis.title}</strong><br/></> : <p>Judul tidak tersedia</p>}</div>

                    <div class="desc">{dinamis.description != null ?  <p>{dinamis.description}</p> : <p>Deskripsi tidak tersedia</p>}</div>
                    </div>
                    )
                }                
                </SimpleGrid>
            </div>
     
        );
    }
}
