import * as React from "react";
import { useMediaQuery } from '@material-ui/core';
import { SimpleList, List, Datagrid, TextField, NumberField, /*ReferenceField,*/ EditButton } from 'react-admin';

export const TargetList = props => {
	const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
	return (
		<List {...props} title="List of aggregation targets">
			{isSmall ? (
				<SimpleList
					primaryText={record => record.targetLabel}
					secondaryText={record => `${record.targetData} targetData`}
					tertiaryText={record => `${record.batchScheduleType} batchScheduleType`}
				/>
			) : (
					<Datagrid>
						<TextField source="id" />
						<TextField source="targetLabel" />
						<TextField source="targetData" />
						<TextField source="batchControlColumn" />
						<NumberField source="batchControlSize" />
						{/* <TextField source="batchControlNext" /> */}
						{/* <DateField source="batchProcessed" /> */}
						{/* <TextField source="batchProcessing" /> */}
						{/* <TextField source="batchMicroChunkCurrent" /> */}
						<TextField source="batchScheduleType" />
						{/* <TextField source="batchScheduleLast" /> */}
						{/* <TextField source="patternColumns" /> */}
						{/* <TextField source="groupByColumns" /> */}
						{/* <NumberField source="groupByPattern" /> */}
						{/* <BooleanField source="groupByFlexible" /> */}
						{/* <TextField source="aggregateColumns" /> */}
						{/* <TextField source="aggregateFunctions" /> */}
						{/* <TextField source="supportSpVersions" /> */}
						{/* <ReferenceField source="creatorId" reference="creators"><TextField source="id" /></ReferenceField> */}
						{/* <NumberField source="feature.id" /> */}
						<EditButton />
					</Datagrid>
				)}
		</List>
	);
}
