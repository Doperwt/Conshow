import {rsvps } from '../seed'
import {ADD_RSVP} from '../actions/rsvps'

export default function(state=rsvps,{type,payload} = {}){
  switch(type){
    case ADD_RSVP:

    default:
      return state
  }
}
