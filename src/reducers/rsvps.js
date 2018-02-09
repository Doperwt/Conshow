import {rsvps } from '../seed'
import {ADD_RSVP} from '../actions/rsvps'


export default function(state=rsvps,{type,payload} = {}){
  switch(type){
    case ADD_RSVP:
      if (state.includes(payload)) return state
        else return [payload, ...state].slice(0,5)

    default:
      return state
  }
}
