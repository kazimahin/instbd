import Template1_Header from "./template1/header"
import Template1_Footer from './template1/footer'
import Template1_Home from './template1/home';

import Template2_Header from "./template2/header"
import Template2_Footer from './template2/footer';
import Template2_Home from './template2/home';


import Login from './auth/login';


const Template1={
    Header:Template1_Header,
    Footer:Template1_Footer,
    Home:Template1_Home,
    Login
}

const Template2 = {
    Header:Template2_Header,
    Footer:Template2_Footer,
    Home:Template2_Home,
    Login

}


export default {Template1,Template2}