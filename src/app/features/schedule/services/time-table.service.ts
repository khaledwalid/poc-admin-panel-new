import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export interface SemesterModel {
  id: number;
  name: string;
}

export interface SlotModel {
  day: number;
  startTime: string;
  endTime: string;
  duration: string;
  teacher: string;
  room: string;
  subject: string;
}

@Injectable()
export class TimeTableService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllSemesters() {
    return this._httpClient.get<SemesterModel[]>('/api/TimeTable/GetAllSemesters')
  }

  generate(semesterId: number) {
    return this._httpClient.get<SlotModel[]>('/api/TimeTable/Generate', {params: {semesterId: semesterId}})
  }

  getLatestTimetable() {
    return this._httpClient.get<SlotModel[]>('/api/TimeTable/GetLatestTimetable')
  }
}
