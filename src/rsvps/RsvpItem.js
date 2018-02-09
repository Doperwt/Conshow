import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'


class RsvpItem extends PureComponent {
	static propTypes = {
    // rsvp_id:PropTypes.number.isRequired,
    member: PropTypes.shape({
      name: PropTypes.string.isRequired,
      photo: PropTypes.string
    }),
    event: PropTypes.shape({
      event_name: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    })
	}

	render() {
    const rsvp = this.props.rsvp

		return (
    <div key={rsvp.event.event_id} > <img src={rsvp.member.photo} alt="stupid face" /><p>{rsvp.event.event_name} will be visited by {rsvp.member.member_name} and will bring along {rsvp.guests} guests</p></div>
		)
	}
}

export default RsvpItem
