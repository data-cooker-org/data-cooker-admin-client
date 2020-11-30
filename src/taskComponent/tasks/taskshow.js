import * as React from "react";
import { Show, SimpleShowLayout, TextField, BooleanField, ReferenceField, NumberField } from 'react-admin';

export const SourceShow = props => (
	<Show {...props}>
		<SimpleShowLayout>
			<NumberField label="Task ID" source="id" />
			<ReferenceField source="jobId" reference="jobs"><TextField optionText="jobName" /></ReferenceField>
			<NumberField source="jobStep" />
			<TextField source="taskName" />
			<TextField source="taskDefinition" />
			<TextField source="taskDescription" />
			<TextField source="taskFeatureId" />
			<TextField source="taskStatus" />
			<TextField source="stopOnError" />
			<TextField source="lastScheduledTime" />
			<TextField source="lastCompleteTime" />
			<ReferenceField source="creatorId" reference="creators"><NumberField optionText="id" /></ReferenceField>
			{/* <NumberField source="job.id" /> */}
		</SimpleShowLayout>
	</Show>
);
