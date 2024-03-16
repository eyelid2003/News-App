import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultProps={
    country:'in',
    pageSiz:8,
    category:'general'
  }
  static propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
    constructor(props){
        super(props);
        this.state={
            articles:[],
            loading:true,
            page:1,
            totalResults:0
        }
        document.title=`PalakApp-${this.props.category}`
    }
    async UpdatePages(){
      this.props.setProgress(40)
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data= await fetch(url)
      let pureData= await data.json()
      this.props.setProgress(70)
      this.setState({
        articles:pureData.articles,
        totalResults:pureData.totalResults,
        loading:false,
      })
      this.props.setProgress(100)
    }
    fetchMoreData = async() => {
      const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=487c7ed3c520438f9f0e4061c83a330e&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.setState({
        page:this.state.page +1,
      })
      let data= await fetch(url)
      let pureData= await data.json()
      this.setState({
        articles:this.state.articles.concat(pureData.articles),
        totalResults:pureData.totalResults,
      })
    };
    async componentDidMount(){
        this.UpdatePages()
    }
  render() {
    return (
        <>
        <h2 className='text-center' style={{marginTop:'90px'}}>Top News Headline on {this.props.category}</h2>
        <InfiniteScroll
          dataLength={this.state.articles}
          next={this.fetchMoreData}
          hasMore={this.state.articles !== this.state.totalResults}
          loader={<h4 className='text-center m-3'>Loading...</h4>}
        >
          <div className='container'>
            <div className='row'>
                {this.state.articles.map((element)=>{
                    return <div className='col-md-4' key={element.url}>
                    <NewsItem title={element.title?element.title:" "} description={element.description?element.description:""} imageUrl={element.urlToImage} newUrl={element.url} author={element.author} date={element.publishedAt} />
                </div>
                })}
            </div> 
        </div>
        </InfiniteScroll>
        </>
  
    )
  }
}

export default News
