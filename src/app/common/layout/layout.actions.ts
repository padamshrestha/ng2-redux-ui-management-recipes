import {Action} from '@ngrx/store';
import {type} from "../util";

/*
 Layout actions are defined here
 */


export const LayoutActionTypes =  {
  //Alerts
  ADD_ALERT: type('[Layout] add alert'),
  REMOVE_ALERT: type('[Layout] remove alert'),
  // Modal actions
  OPEN_MODAL: type('[Layout] Open modal'),
  CLOSE_MODAL: type('[Layout] Close modal'),
  //Left sidenav actions
  OPEN_LEFT_SIDENAV: type('[Layout] Open LeftSidenav'),
  CLOSE_LEFT_SIDENAV: type('[Layout] Close LeftSidenav'),
  //Right sidenav actions
  OPEN_RIGHT_SIDENAV: type('[Layout] Open RightSidenav'),
  CLOSE_RIGHT_SIDENAV: type('[Layout] Close RightSidenav'),
  //Window resize action
  RESIZE_WINDOW: type('[Layout] Resize window'),

};

/*
 Alert actions
 */
export class AddAlertAction implements Action {
  type = LayoutActionTypes.ADD_ALERT;
  constructor(public payload:Object) {
  }
}

export class RemoveAlertAction implements Action {
  type = LayoutActionTypes.REMOVE_ALERT;
  constructor(public payload:Object) {
  }
}
/*
 Window actions
 */

export class ResizeWndowAction implements Action {
  type = LayoutActionTypes.RESIZE_WINDOW;
  constructor(public payload:Object) {
  }
}

/*
  Modal actions
 */
export class OpenModalAction implements Action {
  type = LayoutActionTypes.OPEN_MODAL;
  constructor(public payload:string) {
  }
}

export class CloseModalAction implements Action {
  type = LayoutActionTypes.CLOSE_MODAL;
  constructor() {
  }
}

/*
  Sidenav  actions
 */

export class OpenLeftSidenavAction implements Action {
  type = LayoutActionTypes.OPEN_LEFT_SIDENAV;

  constructor() {
  }
}
export class CloseLeftSidenavAction implements Action {
  type = LayoutActionTypes.CLOSE_LEFT_SIDENAV;

  constructor() {
  }
}
export class OpenRightSidenavAction implements Action {
  type = LayoutActionTypes.OPEN_RIGHT_SIDENAV;

  constructor() {
  }
}

export class CloseRightSidenavAction implements Action {
  type = LayoutActionTypes.CLOSE_RIGHT_SIDENAV;

  constructor() {
  }
}

export type LayoutActions = CloseModalAction | OpenModalAction | CloseLeftSidenavAction |
                            OpenLeftSidenavAction | OpenRightSidenavAction | CloseRightSidenavAction | ResizeWndowAction | AddAlertAction | RemoveAlertAction

