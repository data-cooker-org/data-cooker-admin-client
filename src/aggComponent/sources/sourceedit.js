import * as React from "react";
import { Edit, SimpleForm, TextInput, NumberInput, ReferenceInput, SelectInput} from 'react-admin';

export const SourceEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="targetId" reference="targets"><SelectInput optionText="targetData" /></ReferenceInput>
            <TextInput source="sourceLabel" />
            <TextInput source="sourceData" />
            <NumberInput source="sourceEnabled" />
            {/* <TextInput source="sourceReadyTime" /> */}
            {/* <TextInput source="sourceCheckTime" /> */}
            <TextInput source="sourceCheckQuery" />
            <NumberInput source="patternDefault" />
            <NumberInput source="patternFlexible" />
            <TextInput source="transformation" />
            {/* <ReferenceInput source="permissionId" reference="permissions"><SelectInput optionText="id" /></ReferenceInput> */}
            {/* <TextInput source="target" /> */}
			{/* <NumberInput source="feature.id" /> */}
			{/* <NumberInput source="target.id" /> */}
        </SimpleForm>
    </Edit>
);
