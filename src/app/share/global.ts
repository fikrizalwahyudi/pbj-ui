import { Cookie } from 'ng2-cookies';
'use strict';

export const token=Cookie.get('access_token');
export const ip='http://autoclean-api.akonteknologi.co.id/';

export function getUrl(url:string):string {
    return ip + url + "?access_token=" + Cookie.get('access_token');
}
