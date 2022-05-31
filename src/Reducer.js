import * as ACTIONS from './Action_types';

// Initialisation de l'etat de l'application
const stateInit = {
    elems : [], // Elements de la liste
    revert : false, // Booleen : si true alors la liste est inversée
    find : {
      tag : "", //tag a rechercher
      elems : [] //Les Elements contenants le tag recherché
    }
  }

export default function reducer(state = stateInit, action){
    var newState;
  
    if (action.type == ACTIONS.ADD_ELEM) {
      var elem = action.elem;
      var elems = state.elems;
      newState = Object.assign({}, state, {elems:elems});
    }
    else if (action.type == ACTIONS.REMOVE_ELEM) {
      var elems = state.elems;
      var index = action.type;
  
      elems = elems.filter(function(elem, i){
        if (i == index)
        return false;
        else 
        return true;
      });
      newState = Object.assign({}, state, {elems: elems});
    }
    else if (action.type == ACTIONS.REVERT_ELEM) {
      var elems = state.elems;
      var revert = state.revert;
      elems.revert();
  
      newState = Object.assign({}, state, {elems:elems, revert: !revert});
    }
    else if (action.type == ACTIONS.FIND_TAG){
      var elems = state.elems;
      var tag = action.tag;
      elems = elems.filter(function(elem, i){
        if (elem.indexOf(tag) >= 0)
        return true;
        else
        return false;
      });
  
      newState = Object.assign({}, state, {find : { elems: elems, tag:tag}});
    }
  
    else { //Action inconnue
      newState = state; //Par defaut on va retrouver l'etat actuel
    }
    console.log(action, newState);
    return newState;
  }