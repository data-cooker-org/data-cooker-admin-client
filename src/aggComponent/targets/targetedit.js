import * as React from "react";
import { Edit, SimpleForm, TextInput, NumberInput, DateInput, BooleanInput, ReferenceInput, SelectInput} from 'react-admin';

export const TargetEdit = props => (
    <Edit {...props}>
        <SimpleForm>
		<TextInput source="id" />
            <DateInput source="targetLabel" />
            <TextInput source="targetData" />
            <TextInput source="batchControlColumn" />
            <NumberInput source="batchControlSize" />
            <TextInput source="batchControlNext" />
            <DateInput source="batchProcessed" />
            <TextInput source="batchProcessing" />
            {/* <TextInput source="batchMicroChunkCurrent" /> */}
            <TextInput source="batchScheduleType" />
            {/* <TextInput source="batchScheduleLast" /> */}
            <TextInput source="patternColumns" />
            <TextInput source="groupByColumns" />
            <NumberInput source="groupByPattern" />
            <BooleanInput source="groupByFlexible" />
            <TextInput source="aggregateColumns" />
            <TextInput source="aggregateFunctions" />
            <TextInput source="supportSpVersions" />
            {/* <ReferenceInput source="creatorId" reference="creators"><SelectInput optionText="id" /></ReferenceInput> */}
            {/* <NumberInput source="feature.id" /> */}
        </SimpleForm>
    </Edit>
);
