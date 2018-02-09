import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'


class RsvpItem extends PureComponent {
	static propTypes = {
		// ...
	}

	render() {
    const rsvp = this.props.rsvp

		return (
    <div key={rsvp.event.event_id} > <img src={rsvp.member.photo} alt="stupid picture" /><p>{rsvp.event.event_name} is hosted by {rsvp.member.member_name} will be visited by {rsvp.guests} times</p></div>
		)
	}
}

export default RsvpItem
