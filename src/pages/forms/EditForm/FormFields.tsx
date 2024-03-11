import React from "react";
import {
  Flex,
  Text,
  TextField,
  TextAreaField,
  SelectField,
} from "@aws-amplify/ui-react";
import { Concept } from "../../../API";

interface FormFieldProps {
  formFieldChange: (name: string, value: string) => void;
  formFieldIsValid: (name: string, valid: boolean) => void;
  values: Concept | null | undefined;
}

const FormFields = (props: FormFieldProps) => {
  const [titleHasError, setTitleHasError] = React.useState(true);
  const { values, formFieldChange, formFieldIsValid } = props;

  const handleInputChange = (e) => {
    formFieldChange(e.target.name, e.target.value);
  };

  const validateTitle = (e) => {
    const isEmpty = /^\s*$/.test(e.target.value);
    setTitleHasError(isEmpty);
    formFieldIsValid(e.target.name, !isEmpty);
  };
  return (
    <>
      <Flex direction="column" width="100%">
        <TextField
          value={values?.name}
          onChange={(e) => {
            handleInputChange(e);
            validateTitle(e);
          }}
          name="name"
          hasError={titleHasError}
          errorMessage="Please input a Name"
          label={
            <Text>
              Name
              <Text as="span" fontSize="0.8rem" color="red">
                (required)
              </Text>
            </Text>
          }
          type="text"
          isRequired={true}
        />

        <TextAreaField
          label="Description"
          value={values?.description}
          onChange={(e) => {
            handleInputChange(e);
            validateTitle(e);
          }}
          name="description"
          rows={6}
        />

        {/* <SelectField label="Genre" onChange={handleInputChange} name="genre">
          <option value="Latin">Latin</option>
          <option value="Rap">Rap</option>
          <option value="Blues">Blues</option>
          <option value="Metal">Metal</option>
        </SelectField> */}
      </Flex>
    </>
  );
};

export default FormFields;
