import { Injectable } from '@nestjs/common';
import e from 'express';
import { title } from 'process';

export interface iTrack {
  id: number;
  title: string;
  duracion:number;
  artist: string
}

export const tracks: iTrack[] = [
  {id: 1,
  title: "cancion 1",
  duracion: 120,
  artist: "inteprete 1" },
  {id: 1,
  title: "cancion 2",
  duracion: 130,
  artist: "inteprete 2" },
  {id: 1,
  title: "cancion 3",
  duracion: 160,
  artist: "inteprete 3" },
]

@Injectable()
export class AppService {
  getTracks(): iTrack[] {
    return tracks;
  }
}
