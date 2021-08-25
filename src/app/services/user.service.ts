import { Injectable } from '@angular/core';
import Axios from 'axios'
import { createAvatar } from '@dicebear/avatars'
import * as style from '@dicebear/avatars-avataaars-sprites'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor () { }

  generateAvatar() {
    let svg = createAvatar(style, { seed: Date.now().toLocaleString() })
    return svg
  }
}
