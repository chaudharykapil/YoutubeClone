import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'

import {  faBars, } from '@fortawesome/free-light-svg-icons'


import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super()
        library.add(faBars)
    }
    render() {   
        return (
            <div className='bg-zinc-800 flex justify-start items-center h-16'>
                <div className='flex flex-1 flex-row justify-start mx-5'>
                    <FontAwesomeIcon icon={["fas", "bars"]} color = "#ffffff" size="2x" />
                </div>
            </div>
        );
    }
}

export default Header;
