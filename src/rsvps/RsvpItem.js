import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'


class RsvpItem extends PureComponent {
	static propTypes = {
		// ...
	}

	render() {
    const topic = this.props.topic

		return (
    <li key={topic.topic} > {topic.topic} was mentioned {topic.count} times</li>
		)
	}
}

export default RsvpItem
