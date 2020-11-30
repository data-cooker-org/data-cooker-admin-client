import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import { Filter, ReferenceInput, SelectInput, ChipField, SimpleList, List, Datagrid, TextField, NumberField, ReferenceField, EditButton } from 'react-admin';

const TaskFilter = (props) => (
    <Filter {...props}>
        <ReferenceInput label="Job selector" source="jobId" reference="jobs" alwaysOn >
            <SelectInput optionText="jobName" />
        </ReferenceInput>
        {/* <TextInput label="Task name" source="taskName" allowEmpty /> */}
    </Filter>
);

export const TaskList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props} filters={<TaskFilter />} title="List of aggregation tasks">
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.jobId}
                    secondaryText={record => `${record.jobStep} jobStep`}
                    tertiaryText={record => `${record.taskName} taskName`}
                />
            ) : (
				<Datagrid /* rowClick="edit" */>
					{/* <TextField source="id" /> */}
					<TextField source="taskName" />
					<ReferenceField label="Job name" source="jobId" reference="jobs"><ChipField source="jobName" /></ReferenceField>
					<NumberField source="jobStep" />
					{/* <TextField source="taskDescription" /> */}
					{/* <TextField source="taskFeatureId" /> */}
					{/* <TextField source="taskStatus" /> */}
					<NumberField source="stopOnError" />
					{/* <TextField source="lastScheduledTime" /> */}
					{/* <TextField source="lastCompleteTime" /> */}
					{/* <ReferenceField source="permissionId" reference="permissions"><TextField source="id" /></ReferenceField> */}
					{/* <NumberField source="job.id" /> */}
					<EditButton />
				</Datagrid>
            )}
        </List>
    );
}
