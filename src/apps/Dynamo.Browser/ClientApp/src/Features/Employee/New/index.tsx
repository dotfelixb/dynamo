import React from "react";
import {
  DefaultButton,
  LinkButton,
  PageView,
  SelectInput,
  TextInput,
} from "../../../Components";

interface IOptionItem {
  value: string;
  label: string;
}

interface IFormField {
  name: string;
  placeholder: string;
  type: string;
  options?: IOptionItem[];
}

interface NewEmployeeProps {}

const basicFormFields: IFormField[] = [
  {
    name: "first_name",
    placeholder: "First Name",
    type: "text",
  },
  {
    name: "middle_name",
    placeholder: "Middle Name",
    type: "text",
  },
  { name: "last_name", placeholder: "Last Name", type: "text" },
  {
    name: "gender",
    placeholder: "Gender",
    type: "select",
    options: [
      { value: "", label: "" },
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
  },
  { name: "comment", placeholder: "Comment", type: "area" },
  { name: "employment_type", placeholder: "Employment Type", type: "text" },
  { name: "date_of_birth", placeholder: "Date of Birth", type: "date" },

  { name: "date_of_joining", placeholder: "Date of Joining", type: "date" },
];

interface ILabelField {
  name: string;
  placeholder?: string;
}

const LabelField: React.FC<ILabelField> = ({ name, placeholder }) => (
  <label className="block mb-2 text-gray-600" htmlFor={name}>
    {placeholder}
  </label>
);

interface IInputField {
  type: "text" | "select" | "date";
  name: string;
  placeholder?: string;
}

const InputField: React.FC<IInputField> = ({ type, name, placeholder }) => (
  <input
    className="block w-full text-sm px-3 py-1 rounded bg-gray-50 border-gray-300 focus:border-indigo-300 focus:ring-2 focus:ring-indigo-300"
    type={type}
    name={name}
    placeholder={placeholder}
  />
);

const NewEmployee: React.FC<NewEmployeeProps> = () => {
  const renderTitle = (
    <div>
      <span className="pageTitle">New Employee</span>
      <span className="ml-3 text-xs text-red-300 bg-red-50 px-3 py-1 rounded">
        Not Saved
      </span>
    </div>
  );

  const renderToolbar = (
    <div className="flex flex-row space-x-2">
      <div>
        <DefaultButton text="Save" buttonType="primary" />
      </div>
    </div>
  );

  return (
    <PageView
      pageTitle="New Employee"
      renderTitle={renderTitle}
      renderToolbar={renderToolbar}
    >
      <form>
        {/* basic fields */}
        <div className="p-5">
          <div className="text-xs text-gray-300 font-semibold pb-3 uppercase">
            Basic Information
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
            <TextInput
              name="first_name"
              placeholder="First Name"
              error={true}
            />
            <SelectInput name="title" placeholder="Title" />
          </div>
        </div>
        <div className="p-5">
          <div className="text-xs text-gray-300 font-semibold pb-3 uppercase">
            Dynamo User
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
            <div>
              <LabelField name="user" placeholder="User Id" />
              <input
                className="input-default"
                type="text"
                name="user"
                placeholder="Create System User"
              />
            </div>
          </div>
        </div>
      </form>
    </PageView>
  );
};

export default NewEmployee;
