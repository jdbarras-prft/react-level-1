import React from 'react';

import InventoryTable from './InventoryTable/InventoryTable';
import './app.css';

const App = () => {
    return (
        <div className="container">
            <h1>Acme Grocers Inventory System</h1>
            <div className="content">
                <InventoryTable />
            </div>
        </div>
    )
}

export default App;
