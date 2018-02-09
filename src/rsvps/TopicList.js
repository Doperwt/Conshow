import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
// import { topics } from '../seed'
import {connect} from 'react-redux'


class TopicList extends PureComponent {
  static propTypes = {
  	topics: PropTypes.arrayOf(PropTypes.shape({
  		topic: PropTypes.string.isRequired,
  		count: PropTypes.number.isRequired
  	}))
  }
  renderList(topic){
    return <li key={topic.topic}>{topic.topic} was mentioned {topic.count} times</li>
  }
  // topics = this.props.topics
	render() {
    let topics = this.props.topics

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

const mapStateToProps = ({ topics }) => ({topics})

export default connect(mapStateToProps) (TopicList)
