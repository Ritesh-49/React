import React from "react";
import Headerp2 from './Headerp2'

const Header = () =>{
    return(
        <>
          <nav className="bg-emerald-950 flex items-center justify-between py-5 px-10">
            <h2 className="text-2xl">Ritesh</h2>
            <Headerp2 />
          </nav>
        </>
    )
}

export default Header;