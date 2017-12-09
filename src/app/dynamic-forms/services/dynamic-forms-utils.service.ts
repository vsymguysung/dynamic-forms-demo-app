import { Injectable } from '@angular/core';

@Injectable()
export class DynamicFormsUtilsService {

    private defaultDelimeter: string = '__'

    constructor() { }

    /*
     * Unflatten Object 
     */
    unflattenObj( data: object, delimeter: string=this.defaultDelimeter ): object {
        if (Object( data ) !== data || Array.isArray( data )) return data;

        //
        // Reference regex = /(^.*?)__?([^.\[\]]+)|\[(\d+)\]/g;
        // 
        const regex = new RegExp("(^.*?)" + delimeter + "?([^.\\[\\]]+)|\\[(\\d+)\\]", "g");
        let   resultholder = {};

        for (let p in data) {
            let m;
            let prop = "";
            let cur = resultholder;

            while (m = regex.exec( p )) {
                prop = ( prop === "" ) ? m[1] : prop;
                cur = cur[prop] || ( cur[prop] = ( m[3] ? [] : {} ) );
                prop = m[3] || m[2];
            }
            cur[prop] = data[p];
        }

        return resultholder[""] || resultholder;
    }

    /*
     * Flatten Object
     */
    flattenObj( data: object, delimeter: string=this.defaultDelimeter ): object {
        let result = {};

        const recurse = ( cur, prop ) => {
            if (Object(cur) !== cur) {
                result[prop] = cur;
            }
            else if (Array.isArray( cur )) {
                let l = cur.length;
                for (let i = 0; i < l; i++) {
                    recurse( cur[i], prop + "[" + i + "]" );
                }
                if (l == 0) result[prop] = [];
            }
            else {
                let isEmpty = true;
                for (let p in cur) {
                    isEmpty = false;
                    recurse( cur[p], prop ? prop + delimeter + p : p );
                }
                if (isEmpty && prop) result[prop] = {};
            }
        };
        recurse( data, "" );

        return result;
    }
}
