import React, { useState } from "react";
import {
  DateTimeInput,
  DefaultButton,
  PageView,
  SelectInput,
  TextInput,
} from "../../../Components";

interface NewEmployeeProps {}

const NewEmployee: React.FC<NewEmployeeProps> = () => {
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedEmploymentType, setSelectedEmploymentType] = useState("");

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
            <TextInput name="first_name" label="First Name" error={true} />
            <SelectInput name="status" label="Status" value={selectedStatus}>
              <SelectInput.Option
                text="Active"
                onClick={() => setSelectedStatus("Active")}
              />
              <SelectInput.Option
                text="Left"
                onClick={() => setSelectedStatus("Left")}
              />
            </SelectInput>
            <TextInput name="middle_name" label="Middle Name" />
            <SelectInput
              name="gender"
              label="Gender"
              error={true}
              value={selectedGender}
            >
              <SelectInput.Option
                text="Male"
                onClick={() => setSelectedGender("Male")}
              />
              <SelectInput.Option
                text="Female"
                onClick={() => setSelectedGender("Female")}
              />
            </SelectInput>
            <TextInput name="last_name" label="Last Name" error={true} />
            <DateTimeInput name="date_of_birth" label="Date of Birth" />
            <SelectInput name="title" label="Title" value={selectedTitle}>
              <SelectInput.Option
                text="Mr."
                onClick={() => setSelectedTitle("Mr.")}
              />
              <SelectInput.Option
                text="Mrs."
                onClick={() => setSelectedTitle("Mrs.")}
              />
            </SelectInput>
            <DateTimeInput name="date_of_joining" label="Date of Joining" />
            <SelectInput
              name="employment_type"
              label="Employment Type"
              value={selectedEmploymentType}
            >
              <SelectInput.Option
                text="Part Time"
                onClick={() => setSelectedEmploymentType("Part Time")}
              />
              <SelectInput.Option
                text="Full Time"
                onClick={() => setSelectedEmploymentType("Full Time")}
              />
            </SelectInput>
          </div>
        </div>
        <div className="p-5">
          <div className="text-xs text-gray-300 font-semibold pb-3 uppercase">
            Dynamo User
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
            <TextInput
              name="user"
              label="User Id"
              placeholder="Create Dynamo user"
            />
          </div>
        </div>
      </form>
    </PageView>
  );
};

export default NewEmployee;
