import {Component} from '@angular/core';
import {PopupService} from '../../../../shared/services/popup/popup.service';
import {SemesterModel, TimeTableService} from "../../services/time-table.service";
import {Observable} from "rxjs";
import {AsyncPipe, CommonModule, NgIf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-schedule',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PopupService, HttpClient, TimeTableService],
  templateUrl: './create-schedule.component.html',
  styleUrl: './create-schedule.component.scss'
})
export class CreateScheduleComponent {
  title?: string;
  closeBtnName?: string;
  list: string[] = [];
  selectedSemester: number | null = null;
  semesters$!: Observable<SemesterModel[]>;

  constructor(private popupService: PopupService, public timeTableService: TimeTableService) {
  }

  close(modalId?: any) {
    this.popupService.closeModal(modalId);
  }

  getAllSemesters() {
    this.semesters$ = this.timeTableService.getAllSemesters();
  }

  ngOnInit() {
    this.getAllSemesters();
  }

  onChange($event: any) {
    console.log(this.selectedSemester);
  }

  generate() {
    if (!this.selectedSemester) return;
    this.timeTableService.generate(this.selectedSemester).subscribe(slots => {
      this.popupService.closeModal();
    });
  }
}
