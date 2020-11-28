import * as React from "react";
import { Show, SimpleShowLayout, TextField, BooleanField, DateField, NumberField } from 'react-admin';

export const TargetShow = props => (
    <Show {...props}>
        <SimpleShowLayout>
		<NumberField source="id" />
			<TextField source="jobName" />
			<TextField source="jobDescription" />
			{/* <TextField source="jobStatus" /> */}
			<BooleanField source="jobEnabled" />
			<BooleanField source="repeatSchedule" />
			<TextField source="scheduleType" />
			<TextField source="scheduleCron" />
			<DateField source="scheduleBegin" />
			<DateField source="scheduleEnd" />
			{/* <DateField source="nextSchedule" /> */}
			{/* <DateField source="lastSchedule" /> */}
			{/* <ReferenceField source="permissionId" reference="permissions"><SelectField optionText="id" /></ReferenceField> */}
        </SimpleShowLayout>
    </Show>
);
