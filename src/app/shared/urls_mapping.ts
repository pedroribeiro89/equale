import {environment} from '../../environments/environment';

export class URLS {

    public static root: string = environment.apiUrl;

    public static students(id?: number): string {
        const url: string = URLS.root + '/students';
        return id ? url + '/' + id : url;
    }

    public static courses(id?: number): string {
        const url: string = URLS.root + '/courses';
        return id ? url + '/' + id : url;
    }
}
