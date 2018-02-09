import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import RsvpItem from './RsvpItem'
import {rsvps} from '../seed'

class RsvpList extends PureComponent {
	// static propTypes = {	}

  renderItem(rsvp) {
    return <RsvpItem rsvp={rsvp} />
  }
	render() {

		return (
      <div key="rsvplist"> {rsvps.map(rsvp => this.renderItem(rsvp))}</div>
		)
	}
}

export default RsvpList
