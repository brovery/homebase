import { Injectable } from '@angular/core';
import {Exercise} from "../exercise/exercise";
import {EXERCISE} from "../exercise/mock-exercises";
import {StoredFood} from "../data/data.config";
import {STOREDFOOD} from "./STOREDFOOD";

@Injectable()
export class DataService {
    getExercises(): Promise<Exercise[]> {
        return Promise.resolve(EXERCISE)
    }

    getStoredFood(): Promise<StoredFood[]> {
        return Promise.resolve(STOREDFOOD);
    }
}