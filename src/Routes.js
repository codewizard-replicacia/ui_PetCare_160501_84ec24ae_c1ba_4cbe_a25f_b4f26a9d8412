import React from "react";
import { Routes, Route } from "react-router-dom";
import {
PetCareCenterCreate, PetCareCenterEdit, PetCareCenterView, 
PetCareCenters, 
PetCareCenterTiles
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="PetCareCenters/view/:id" element={<PetCareCenterView {...props} title={'View PetCareCenter'} />} />
                        <Route path="PetCareCenters/edit/:id" element={<PetCareCenterEdit {...props} title={'Edit PetCareCenter'} />} />
                        <Route path="PetCareCenters/create" element={<PetCareCenterCreate {...props} title={'Create PetCareCenter'} />} />
                                                <Route path="/" element={<PetCareCenters {...props} title={'Petcare Centers Table'} nolistbar={true} />} />
                        
                <Route path="/pttable" element={<PetCareCenters {...props} title={'Petcare Centers Table'} />} />
                                                                                                                                                                                                                <Route path="/centersTiles" element={<PetCareCenterTiles {...props} title={'Tiles'} />} />
        </Routes>
    )

};

export default Component;