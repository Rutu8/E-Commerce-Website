import { CanActivateFn } from '@angular/router';
import { CommonService } from './common.service';

export const authGuard: CanActivateFn = (route, state) => {
  return CommonService.prototype.islogin();
};
