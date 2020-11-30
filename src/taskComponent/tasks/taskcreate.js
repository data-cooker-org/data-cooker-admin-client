import * as React from "react";
import { Create, SimpleForm, TextInput, NumberInput, BooleanInput, ReferenceInput, SelectInput } from 'react-admin';

export const TaskCreate = props => (
	<Create {...props}>
		<SimpleForm>
			{/* <NumberField label="Task ID" source="id" /> */}
			<ReferenceInput source="jobId" reference="jobs"><SelectInput optionText="jobName" /></ReferenceInput>
			<NumberInput source="jobStep" />
			<TextInput source="taskName" />
			<TextInput source="taskDefinition" />
			<TextInput source="taskDescription" />
			<TextInput source="taskFeatureId" />
			{/* <TextInput source="taskStatus" /> */}
			<TextInput source="stopOnError" />
			{/* <TextInput source="lastScheduledTime" /> */}
			{/* <TextInput source="lastCompleteTime" /> */}
			{/* <ReferenceInput source="creatorId" reference="creators"><SelectInput optionText="id" /></ReferenceInput> */}
			{/* <NumberInput source="job.id" /> */}
		</SimpleForm>
	</Create>
);
