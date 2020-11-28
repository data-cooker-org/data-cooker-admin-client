import * as React from "react";
import { Edit, SimpleForm, NumberField, TextInput, BooleanInput, NumberInput, ReferenceInput, SelectInput} from 'react-admin';

export const TaskEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <NumberField label="Task ID" source="id" />
            <ReferenceInput source="jobId" reference="jobs"><SelectInput optionText="jobName" /></ReferenceInput>
            <NumberInput source="taskNo" />
            <TextInput source="taskName" />
            <TextInput source="taskDescription" />
            <TextInput source="taskWorker" />
            {/* <TextInput source="taskStatus" /> */}
            <BooleanInput source="stopOnError" />
            {/* <TextInput source="lastScheduledTime" /> */}
            {/* <TextInput source="lastCompleteTime" /> */}
            {/* <ReferenceInput source="permissionId" reference="permissions"><SelectInput optionText="id" /></ReferenceInput> */}
            {/* <NumberInput source="job.id" /> */}
        </SimpleForm>
    </Edit>
);
