import * as React from "react";
import { Show, SimpleShowLayout, TextField, BooleanField, ReferenceField, NumberField } from 'react-admin';

export const SourceShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <ReferenceField source="jobId" reference="jobs"><TextField optionText="jobName" /></ReferenceField>
            <NumberField source="jobStep" />
            <TextField source="taskName" />
            <TextField source="taskDescription" />
            <TextField source="taskWorker" />
            <TextField source="taskStatus" />
            <BooleanField source="stopOnError" />
            <TextField source="lastScheduledTime" />
            <TextField source="lastCompleteTime" />
            {/* <ReferenceField source="permissionId" reference="permissions"><SelectField optionText="id" /></ReferenceField> */}
            {/* <NumberField source="job.id" /> */}
        </SimpleShowLayout>
    </Show>
);
