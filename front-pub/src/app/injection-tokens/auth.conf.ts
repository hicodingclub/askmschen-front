import { DropdownItem } from '@hicoder/angular-auth';

export const authentication_page_root_uri: string = '/auth';
export const authentication_server_root_uri: string = '/api/auth';
export const authentication_interfaces: string = 'users';
export const authentication_login_pipeline = undefined;
export const authentication_registration_pipeline = undefined; // string
export const authentication_registration_required = undefined; // {firstName: false, lastName: false, phone: false}

export const authentication_dropdown_items: DropdownItem[] = [
    // {displayName: 'My classes', routerLink: '/academics/class'},
    // {displayName: 'Student Profile', routerLink: '/academics/student'},
];
