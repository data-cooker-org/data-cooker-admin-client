import * as React from "react";
import { Edit, SimpleForm, TextInput, NumberField, BooleanInput, ReferenceInput, SelectInput, DateInput } from 'react-admin';

export const JobEdit = props => (
	<Edit {...props}>
		<SimpleForm>
			<NumberField source="id" />
			<TextInput source="jobName" />
			<TextInput source="jobDescription" />
			{/* <TextInput source="jobStatus" /> */}
			<BooleanInput source="jobEnabled" />
			<BooleanInput source="repeatSchedule" />
			<TextInput source="scheduleType" />
			<TextInput source="scheduleCron" />
			<DateInput source="scheduleBegin" />
			<DateInput source="scheduleEnd" />
			{/* <DateInput source="nextSchedule" /> */}
			{/* <DateInput source="lastSchedule" /> */}
			{/* <ReferenceInput source="permissionId" reference="permissions"><SelectInput optionText="id" /></ReferenceInput> */}
		</SimpleForm>
	</Edit>
);
