import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import RsvpItem from './RsvpItem'


class RsvpList extends PureComponent {
	// static propTypes = {	}

  renderItem(topic) {
    return <RsvpItem topic={topic} />
  }
	render() {
    const topics = this.props.topics
		return (
      <div> <ol key="list">{topics.map(topic => this.renderItem(topic))}</ol></div>
		)
	}
}

export default RsvpList
