import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export class News extends Component {
  
  constructor(props){
    super(props);   
    this.state={
      articles:[],
      loading:false,
      page:1
    }
    console.log("Hello I am a constructor ",props)
    this.pagesize = props.pagesize;
    this.category=props.category; 
    
    document.title="News App | "+this.capitalizeFirstLetter(this.props.category);
  }
  capitalizeFirstLetter =(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  async componentDidMount(){
    console.log("cdm")
    let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=ff39b69a658e42cebc994a5a5a3b7bea&page=1&pagesize=${this.props.pagesize}`;
    let data=await fetch(url);
    let parsedData=await data.json()
    this.setState({articles: parsedData.articles,
                  totalresult:parsedData.totalResults
    })
  }

  
  handleonnext=async()=>{
    console.log("next");

    if(this.state.page+1 > Math.ceil(this.state.totalresult/this.props.pagesize) ){
        console.log("End of todays top headline articles");
    }
    else{
      let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=ff39b69a658e42cebc994a5a5a3b7bea&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      
      let nextpage=this.state.page+1;
      // console.log(nextpage,this.state.totalresult/this.props.pagesize);
      let data=await fetch(url);
      let parsedData=await data.json()
   
      this.setState({     
        page :nextpage,
        articles:parsedData.articles
      }) 
    }
  }

  handleonprev=async()=>{
    console.log("prev");
    let url=`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=ff39b69a658e42cebc994a5a5a3b7bea&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
    let data=await fetch(url);
    let parsedData=await data.json()

    this.setState({     
      page :this.state.page-1 ,
      articles:parsedData.articles
    })
  }

  render() {
    console.log("Before cdm");

    return (
        <div className="contianer my-3 mx-5">
        <h3>Here is your news on {this.capitalizeFirstLetter(this.props.category)}</h3>
          <div className="row">
          { 
            this.state.articles.map((value)=>{
              if (value.urlToImage !=null) {   
              return <div className="col-md-4 " key={value.url}>
                <NewsItem title={value.title?value.title.slice(0,80):" "} 
                desc={value.description?value.description.slice(0,82):" "} urlToImage={value.urlToImage} newsurl={value.url} 
                author={value.source.name}  date={value.publishedAt} 
                />
                </div>
              }
              else{
                return null
              }
            })
          }
         </div>
         <br />
         <br />
         
         {/* Previous & Next button */}
         <div className="contianer d-flex justify-content-around">
          <button disabled={this.state.page <= 1} type="button" onClick={this.handleonprev}className="btn btn-dark">&larr; Previous</button>
          <span>
            Page - <b>{this.state.page}</b>
          </span>

          <button disabled={this.state.page +1 > Math.ceil(this.state.totalresult/this.props.pagesize)} type="button" onClick={this.handleonnext} className="btn btn-dark">Next &rarr;</button>
         </div>
         

        </div>
       
    )
  }
}

export default News