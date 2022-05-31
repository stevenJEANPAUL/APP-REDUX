import * as ACTIONS from './Action_types';


export function add_elem(elem){
    return {
      type : ACTIONS.ADD_ELEM, //type d'action
      elem : elem // element
    };
  }
  
  export function remove_elem(index){
    return {
      type: ACTIONS.REMOVE_ELEM,
      index : index
    };
  }
  
  export function revert_list(){
    return {
      type: ACTIONS.REVERT_ELEM
    }
  }
  
  export function find_tag(tag){
    return {
      type: ACTIONS.FIND_TAG,
      tag : tag
    };
  }
  
  