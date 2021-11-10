import 'devextreme/dist/css/dx.light.css';
import {
    DataGrid, FilterRow, Paging, SearchPanel
} from 'devextreme-react/data-grid';

export const employees = [{
    "EmployeeID": 1,
    "FullName": "Nancy Davolio",
    "Position": "Sales Representative",
    "TitleOfCourtesy": "Ms.",
    "BirthDate": "1968-12-08T00:00:00.000Z",
}, {
    "EmployeeID": 2,
    "FullName": "Andrew Fuller",
    "Position": "Vice President, Sales",
    "TitleOfCourtesy": "Dr.",
    "BirthDate": "1972-02-19T00:00:00.000Z",
}, {
    "EmployeeID": 3,
    "FullName": "Janet Leverling",
    "Position": "Sales Representative",
    "TitleOfCourtesy": "Ms.",
    "BirthDate": "1983-08-30T00:00:00.000Z",
}, {
    "EmployeeID": 4,
    "FullName": "Margaret Peacock",
    "Position": "Sales Representative",
    "TitleOfCourtesy": "Mrs.",
    "BirthDate": "1957-09-19T00:00:00.000Z",
}, {
    "EmployeeID": 5,
    "FullName": "Steven Buchanan",
    "Position": "Sales Manager",
    "TitleOfCourtesy": "Mr.",
    "BirthDate": "1975-03-04T00:00:00.000Z",
}, {
    "EmployeeID": 6,
    "FullName": "Michael Suyama",
    "Position": "Sales Representative",
    "TitleOfCourtesy": "Mr.",
    "BirthDate": "1983-07-02T00:00:00.000Z",
}, {
    "EmployeeID": 7,
    "FullName": "Robert King",
    "Position": "Sales Representative",
    "TitleOfCourtesy": "Mr.",
    "BirthDate": "1980-05-29T00:00:00.000Z",
}, {
    "EmployeeID": 8,
    "FullName": "Laura Callahan",
    "Position": "Inside Sales Coordinator",
    "TitleOfCourtesy": "Ms.",
    "BirthDate": "1978-01-09T00:00:00.000Z",
}, {
    "EmployeeID": 9,
    "FullName": "Brett Wade",
    "Position": "Sales Representative",
    "TitleOfCourtesy": "Mr.",
    "BirthDate": "1986-01-27T00:00:00.000Z",
}];

const Reports = () => {
    return (
        <DataGrid
            dataSource={employees}
            
            keyExpr="EmployeeID">
            <FilterRow visible={true} />
            <SearchPanel placeholder="Pesquisar" visible={true} />
            <Paging
                    defaultPageSize={5}
                    defaultPageIndex={0} />
        </DataGrid>
    );
}

export default Reports;