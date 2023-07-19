import React from "react";
import { useEffect } from "react";

const AdminSystemSetting = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
      <h1 className="flex justify-center items-center mt-96">system setting</h1>
    </div>
  );
};

export default AdminSystemSetting;
