import React from "react";
import Video from "../video/video";
import SideBar from "../sidebar/sidebar";
import Listitem from "../ListItem";
import { useAuth } from "../authprovider/authcontext";

function Front() {
  const { data, loading } = useAuth();
  console.log(data);
  return (
    <div className="flex ">
      <SideBar />
      <div className="h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden">
        <Listitem />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            data.map((item) => {
              if (item.type !== "video") return false;
              return <Video key={item.id} video={item?.video} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Front;