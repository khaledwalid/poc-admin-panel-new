import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FullCalendarModule} from '@fullcalendar/angular';
import {CalendarOptions} from '@fullcalendar/core';
import momentPlugin from '@fullcalendar/moment';
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'
import {SlotModel, TimeTableService} from "../../services/time-table.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BsModalService} from "ngx-bootstrap/modal";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule, HttpClientModule],
  providers: [HttpClient, TimeTableService],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent implements OnInit {
  colors = ['event-purple', 'event-green', 'event-default', 'event-orange', 'event-blue'];
  @ViewChild('calendar') calendar: any;

  constructor(public timeTableService: TimeTableService, public modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.modalService.onHide.subscribe(() => {
      this.timeTableService.getLatestTimetable().subscribe(slots => {
        let events: any[] = [];
        slots.forEach(slot => {
          const randomElement = this.colors[Math.floor(Math.random() * this.colors.length)];
          events.push({
            classNames: [randomElement],
            title: `${slot.subject} - ${slot.room}`,
            start: slot.startTime,
            end: slot.endTime,
            extendedProps: {
              department: slot.room
            },
            description: slot.teacher
          });
        });
        this.calendarOptions.events = events;
      })
    });
  }

  calendarOptions: CalendarOptions = {
    plugins: [momentPlugin, bootstrap5Plugin, interactionPlugin, dayGridPlugin, timeGridPlugin],
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: '',
      center: '',
      right: ''
    },
    initialView: 'timeGridWeek',
    height: '90%',
    expandRows: true,
    slotMinTime: '10:00:00',
    slotMaxTime: '18:00:00',
    slotDuration: '01:00:00',
    // hiddenDays: [5],
    slotLabelFormat: {
      hour: '2-digit',
      minute: '2-digit',
      omitZeroMinute: false,
      meridiem: 'lowercase'
    },
    dayHeaderFormat: 'D dddd',
  };

}
