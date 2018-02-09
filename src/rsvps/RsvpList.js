import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import RsvpItem from './RsvpItem'
import {connect} from 'react-redux'


class RsvpList extends PureComponent {
	static propTypes = {
    rsvp: PropTypes.shape({
      rsvp_id:PropTypes.number.isRequired,
      member: PropTypes.shape({
        name: PropTypes.string.isRequired,
        photo: PropTypes.string
      }),
      event: PropTypes.shape({
        event_name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired
      })
    })}

  renderItem(rsvp) {
    return <RsvpItem key={rsvp.rsvp_id} rsvp={rsvp} />
  }
	render() {
    let rsvps = this.props.rsvps
		return (
      <div key="rsvplist"><h2>RSVP list</h2> {rsvps.map(rsvp => this.renderItem(rsvp))}</div>
		)
	}
}
const mapStateToProps = ({ rsvps }) => ({rsvps})
export default connect(mapStateToProps)(RsvpList)
