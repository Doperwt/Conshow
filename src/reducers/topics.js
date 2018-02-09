import {UPDATE_TOPICS} from '../actions/topics'
import { topics } from '../seed'

export default function(state=topics,{type,payload} = {}){
  switch(type){
    case UPDATE_TOPICS:
      return payload

    default:
      return state
  }
}
