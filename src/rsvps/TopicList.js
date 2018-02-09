import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { topics } from '../seed'



// const rsvp = rsvps[0]



class TopicList extends PureComponent {
  static propTypes = {
  	topics: PropTypes.arrayOf(PropTypes.shape({
  		topic: PropTypes.string.isRequired,
  		count: PropTypes.number.isRequired
  	})).isRequired
  }
  renderList(topic){
    return <li key={topic.topic}>{topic.topic} was mentioned {topic.count} times</li>
  }
  // topics = this.props.topics

	render() {
		return (
      <div>
      <h1>Topics top 10</h1>
      <ol>
          {topics.map(topic => this.renderList(topic))}
          </ol>
      </div>
		)
	}
}

export default TopicList
