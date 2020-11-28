import * as React from "react";
import { Show, SimpleShowLayout, TextField, BooleanField, NumberField } from 'react-admin';

export const TargetShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="targetLabel" />
            <TextField source="targetData" />
            <TextField source="batchControlColumn" />
            <NumberField source="batchControlSize" />
            <TextField source="batchControlNext" />
            <TextField source="batchProcessed" />
            <TextField source="batchProcessing" />
            <TextField source="batchMicroChunkCurrent" />
            <TextField source="batchScheduleType" />
            <TextField source="batchScheduleLast" />
            <TextField source="patternColumns" />
            <TextField source="groupByColumns" />
            <NumberField source="groupByPattern" />
            <BooleanField source="groupByFlexible" />
            <TextField source="aggregateColumns" />
            <TextField source="aggregateFunctions" />
            <TextField source="supportSpVersions" />
            {/* <ReferenceField source="permissionId" reference="permissions"><TextField source="id" /></ReferenceField> */}
        </SimpleShowLayout>
    </Show>
);
