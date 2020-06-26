import { openDB, DBSchema } from 'idb';

export class Indexdb {

    /**
     *
     */
    constructor() {

    }

   async connecttoDB() {

    }

}

interface MyDB extends DBSchema {
    'favourite-number': {
        key: string;
        value: number;
    };
}
