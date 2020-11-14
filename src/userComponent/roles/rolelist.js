import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import { SimpleList, List, Datagrid, TextField } from 'react-admin';

export const RoleList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props} title="List of the roles">
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.id}
                    secondaryText={record => `${record.roleName} roleName`}
                 />
            ) : (
                <Datagrid /* rowClick="edit" */ >
                    <TextField source="id" />
                    <TextField source="roleName" />
                </Datagrid>

            )}
        </List>
    );
}
