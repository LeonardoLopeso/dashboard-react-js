import 'devextreme/dist/css/dx.light.css';
import {
    DataGrid, Editing, FilterRow, Paging, SearchPanel
} from 'devextreme-react/data-grid';

import { Form, Popup } from 'devextreme-react';

export const employees = [{
    "EmployeeID": 1,
    "Nome complete": "Nancy Davolio",
    "Posição": "Sales Representative",
    "Título de cortesia": "Ms.",
    "Data de nascimento": "1968-12-08T00:00:00.000Z",
}, {
    "EmployeeID": 2,
    "Nome complete": "Andrew Fuller",
    "Posição": "Vice President, Sales",
    "Título de cortesia": "Dr.",
    "Data de nascimento": "1972-02-19T00:00:00.000Z",
}, {
    "EmployeeID": 3,
    "Nome complete": "Janet Leverling",
    "Posição": "Sales Representative",
    "Título de cortesia": "Ms.",
    "Data de nascimento": "1983-08-30T00:00:00.000Z",
}, {
    "EmployeeID": 4,
    "Nome complete": "Margaret Peacock",
    "Posição": "Sales Representative",
    "Título de cortesia": "Mrs.",
    "Data de nascimento": "1957-09-19T00:00:00.000Z",
}, {
    "EmployeeID": 5,
    "Nome complete": "Steven Buchanan",
    "Posição": "Sales Manager",
    "Título de cortesia": "Mr.",
    "Data de nascimento": "1975-03-04T00:00:00.000Z",
}, {
    "EmployeeID": 6,
    "Nome complete": "Michael Suyama",
    "Posição": "Sales Representative",
    "Título de cortesia": "Mr.",
    "Data de nascimento": "1983-07-02T00:00:00.000Z",
}, {
    "EmployeeID": 7,
    "Nome complete": "Robert King",
    "Posição": "Sales Representative",
    "Título de cortesia": "Mr.",
    "Data de nascimento": "1980-05-29T00:00:00.000Z",
}, {
    "EmployeeID": 8,
    "Nome complete": "Laura Callahan",
    "Posição": "Inside Sales Coordinator",
    "Título de cortesia": "Ms.",
    "Data de nascimento": "1978-01-09T00:00:00.000Z",
}, {
    "EmployeeID": 9,
    "Nome complete": "Brett Wade",
    "Posição": "Sales Representative",
    "Título de cortesia": "Mr.",
    "Data de nascimento": "1986-01-27T00:00:00.000Z",
}];

const Reports = ({ size = 5, edit = false, destroy = false }) => {
    return (
        <DataGrid
            dataSource={employees}
            
            keyExpr="EmployeeID">
            <FilterRow visible={true} />
            <Editing 
                allowUpdating={true} 
                allowDeleting={destroy} 
                allowAdding={edit} 
                mode="form"
                useIcons={true} 
                texts={{confirmDeleteMessage:"Corpstek"}} 
            >
            <Form labelLocation="top"/>
            <Popup showTitle={true} title="Row in the editing state"
            />
            </Editing>
            <SearchPanel placeholder="Pesquisar" visible={true} />
            <Paging defaultPageSize={size} defaultPageIndex={0} />
        </DataGrid>
    );
}

export default Reports;