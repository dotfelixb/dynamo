import React, { useState } from "react";
import {
  DefaultButton,
  PageView,
  SelectInput,
  TextInput,
} from "../../../Components";

interface NewEmployeeProps {}

const NewEmployee: React.FC<NewEmployeeProps> = () => {
  const [selectedTitle, setSelectedTitle] = useState("");

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
            <SelectInput name="title" label="Title" value={selectedTitle}>
              <SelectInput.Option
                text="Mr."
                onClick={() => setSelectedTitle("Mr.")}
              />
              <SelectInput.Option
                text="Mrs."
                onClick={() => setSelectedTitle("Mrs.")}
              />
              <SelectInput.Option
                text="Miss."
                onClick={() => setSelectedTitle("Miss.")}
              />
              <SelectInput.Option
                text="Dr."
                onClick={() => setSelectedTitle("Dr.")}
              />
              <SelectInput.Option
                text="Prof."
                onClick={() => setSelectedTitle("Prof.")}
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
