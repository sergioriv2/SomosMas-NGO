import React, { useState } from "react";
import { useSelector } from "react-redux";

import ProfileView from "./ProfileView";
import ProfileEdit from "./ProfileEdit";

export default function Profile() {
  const [editView, setEditView] = useState(false);
  const user = useSelector(({ user }) => user.entity);

  if (!editView) {
    return <ProfileView setEditView={setEditView} userData={user} />;
  }

  return <ProfileEdit setEditView={setEditView} userData={user} />;
}
