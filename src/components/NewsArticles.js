import React, { Component, Fragment } from 'react'
import UWECLogo from '../media/UWECLogo.png'

class NewsArticles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [
        {
          name: 'UWEC Story',
          logo:
            'https://i2.wp.com/speechpathologymastersprograms.com/wp-content/uploads/2018/06/University-of-Wisconsin-Eau-Claire.png',
          link:
            'https://www.uwec.edu/news/news/ymusic-residency-program-offers-music-students-new-opportunities-3227/'
        },
        {
          name: 'Spectator Story',
          logo: '',
          link: ''
        },
        {
          name: 'Leader Telegram Story',
          logo: '',
          link: ''
        }
      ]
    }
  }

  createStories = () => {
    return (
      <Fragment>
        {this.state.articles.map(article => (
          <a href={article.link}>
            <img src={article.logo} />
          </a>
        ))}
      </Fragment>
    )
  }

  render() {
    return (
      <div className="newsArticles">
        <h1 className="heading">As Seen on:</h1>
        {this.createStories()}
      </div>
    )
  }
}

export default NewsArticles
