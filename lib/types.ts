export interface ScheduleRecord {
  name: string;
  date: string;
  turn: string;
  staff_position: string;
  leave?: boolean;   // 휴직(병가/육아 등) 여부
}

export type PositionTab = "기관사" | "차장";
