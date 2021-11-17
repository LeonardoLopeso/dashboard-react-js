import 'devextreme/dist/css/dx.light.css';
import {
    DataGrid, Editing, FilterRow, Paging, SearchPanel
} from 'devextreme-react/data-grid';

import { Form, Popup } from 'devextreme-react';
import CustomStore from 'devextreme/data/custom_store';
import DataSource from 'devextreme/data/data_source';
import api from '../../services/api';
import { useEffect, useState } from 'react';


const Reports = ({ size = 5, edit = false, destroy = false, source = [], endpoint = "" }) => {

    const [dataSourcer, setDataSource] = useState(source);

    useEffect(() => {
        setDataSource(source);
    },[source]);

    const removeData = async (key) => {
        console.log("Remove key: ", key);
        const respo = await api.delete(`${endpoint}/${key}`);

        if(respo.status != 200) {
            alert("Algo de inesperado aconteceu");
            // window.location.reload();
        }else{
            setDataSource(dataSourcer.filter((elemente) => elemente.id !== key));
        }
    }
    
    const updateData = async (key, values) => {
        console.log("key: ", key, "Values: ", values);
        const respo = await api.put(`${endpoint}/${key}`,values);
        console.log(respo);
    }

    const custom_store = new CustomStore({
        key: "id",
        load: () => {
            return dataSourcer;
        },
        update: (key, values) => {
            updateData(key, values);
            data_source.reload();
        },
        remove: (key) => {
            removeData(key);
            data_source.reload();
        },
    });

    const data_source = new DataSource({
        store: custom_store,
        onChanged: () => {
            console.log(data_source);           
        },
        onSubmit: () => {
            console.log(data_source)
        }
    }
    );

    return (
        <DataGrid
            dataSource={data_source}
            
            keyExpr="id">
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