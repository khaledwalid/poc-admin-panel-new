import {Injectable} from '@angular/core';
import {BsModalService, ModalOptions} from 'ngx-bootstrap/modal';

@Injectable()
export class PopupService {

  constructor(private modalService: BsModalService) {
  }

  openModal(component: any, options?: ModalOptions) {
    this.modalService.show(component, options)
  }

  closeModal(modalId?: number | string) {
    this.modalService.hide(modalId);
  }
}
