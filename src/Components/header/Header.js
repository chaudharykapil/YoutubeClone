import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core'

import {  faBars, faSearch } from '@fortawesome/free-solid-svg-icons'


import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super()
        library.add(faBars,faSearch)
    }
    render() {   
        return (
            <div className='bg-white flex justify-start items-center h-16'>
                <div className='flex flex-1 flex-row justify-start items-center mx-5'>
                    <div className="flex flex-row justify-start items-center">
                        <div className="flex">
                            <FontAwesomeIcon icon={["fas", "bars"]} color = "#28282B" size="lg" />
                        </div>
                        <div className="flex h-12 mx-4">
                            <img src={require("../../assets/imgs/logo.png")} />
                        </div>
                    </div>
                    <div className="flex flex-1 flex-row justify-center items-center ">
                        <div className="w-1/2">
                            <input className="border-2 border-r-0 rounded-l-3xl w-full h-10 px-5" type={"text"} />
                        </div>
                        <div className="flex h-10 justify-center items-center border-2 pr-5 rounded-r-3xl border-l-0">
                            <button>
                                <FontAwesomeIcon icon={["fas","search"]} size = "lg" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
