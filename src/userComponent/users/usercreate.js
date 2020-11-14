import * as React from "react";
import { Create, SimpleForm, TextInput, ReferenceInput, SelectInput } from 'react-admin';

export const UserCreate = props => (
	<Create {...props}>
		<SimpleForm>
			{/* <TextInput source="id" /> */}
			<TextInput source="userName" />
			<TextInput source="firstName" />
			<TextInput source="lastName" />
			<TextInput source="email" />
			<TextInput source="password" />
			<ReferenceInput source="avatarId" reference="avatars"><SelectInput optionText="id" /></ReferenceInput>
			<ReferenceInput source="departmentId" reference="departments"><SelectInput source="department" /></ReferenceInput>
			<ReferenceInput source="roleId" reference="roles"><SelectInput optionText="roleName" /></ReferenceInput>
			{/* <ReferenceInput source="permissionId" reference="permissions"><SelectInput optionText="id" /></ReferenceInput> */}
		</SimpleForm>
	</Create>
);
