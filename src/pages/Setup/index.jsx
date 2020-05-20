import React from "react";
import "./index.style.scss";
import SetupItem from "../../components/SetupItem";
import UsersIcon from "../../assets/users_icon.png";
import QuestionsIcon from "../../assets/question_icon.png";
import ResourcesIcon from "../../assets/resources_icon.png";
import MessagingTemplateIcon from "../../assets/messaging_icon_sel.png";
const Setup = () => {
  return (
    <div className="d-flex setup-content">
      <SetupItem itemName="Users" itemIcon={UsersIcon} />
      <SetupItem itemName="Questions" itemIcon={QuestionsIcon} />
      <SetupItem itemName="Resources" itemIcon={ResourcesIcon} />
      <SetupItem
        itemName="Messaging Templates"
        itemIcon={MessagingTemplateIcon}
      />
    </div>
  );
};

export default Setup;
