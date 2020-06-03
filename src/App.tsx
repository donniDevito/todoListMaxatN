import React, { useState } from 'react';
import './App.css';
import FilterComponent from "./components/FilterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListComponent from "./components/ListComponent";


export enum FilterStates {
    All = 0,
    Completed = 1,
    InProgress = 2,
}

const App: React.FC=()=>{
    
    const [filterState,setFilterState]=useState(FilterStates.All)
    return (
            <div className="container-fluid">
               
               <div className="row">
                    <div className="col-lg-12">
                         <HeaderComponent/>
                     </div>
               </div>
                <div className="row">
                    <div className="col-lg-9">
                        
                        <div className="container-fluid w-75 notepadContainer">
                            <ListComponent currentFilter={filterState} />
                        </div>
                    </div>
                    <div className="col-lg-3 notepadContainer">
                        <FilterComponent setFilterState={setFilterState}filterState={filterState}/>
                    </div>
                </div>
            </div>
        );
    



}
export default App;
