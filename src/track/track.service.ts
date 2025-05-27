import { Injectable } from '@nestjs/common';
import { iTrack } from 'src/app.service';
import { Track } from './track.interface';
const BASE_URL = 'http://localhost:3030';
@Injectable()
export class TrackService {

    constructor(private readonly trackService: TrackService) {}
    async getTracks(): Promise<Track[]> {
        const res= await fetch(BASE_URL);
        const parsed = await res.json();
        return parsed;
    }
    }
