import React, { useState } from "react";
import {assets} from "../assets/frontend_assets";

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Arslan Haider (-Change All Info-)",
    image: assets.profile_icon,
    email: "arslanhaider@gmail.com",
    phone: "03217077229",
    address: "New Baker Street, suite 335, Sialkot",
    gender: "Male",
    dob: "2002-06-06",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img className="w-36 rounded" src={userData.image} alt="User Profile" />
      {isEdit ? (
        <input
        className="bg-gray-50 text-3xl font-medium max-w-60 mt-2"
          type="text"
          value={userData.name}
          onChange={(event) =>
            setUserData((prev) => ({ ...prev, name: event.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-2">{userData.name}</p>
      )}
      <hr className="bg-gray-400"/>
      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
      </div>
      <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
        <p className="font-medium">Email ID:</p>
        <p className="text-blue">{userData.email}</p>
        <p className="font-medium">Phone:</p>
        {isEdit ? (
          <input className="bg-gray-100 max-w-52 text-blue"
            type="text"
            value={userData.phone}
            onChange={(event) =>
              setUserData((prev) => ({ ...prev, phone: event.target.value }))
            }
          />
        ) : (
          <p className="text-blue">{userData.phone}</p>
        )}
        <p className="font-medium">Address:</p>
          {isEdit ? (
            <input className="text-gray-500"
              type="text"
              value={userData.address}
              onChange={(event) =>
                setUserData((prev) => ({ ...prev, address: event.target.value }))
              }
            />
          ) : (
            <p>{userData.address}</p>
          )}
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className="grid grid-cols-[1fr_3fr] gray-y-2.5 mt-3 text-neeutral-700">
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select className="max-w-20 bg-gray"
              value={userData.gender}
              onChange={(event) =>
                setUserData((prev) => ({ ...prev, gender: event.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input className="bg-gray"
              type="date"
              value={userData.dob}
              onChange={(event) =>
                setUserData((prev) => ({ ...prev, dob: event.target.value }))
              }
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-6">
        {
          isEdit
          ? <button className="con-border bg-gray px-6 py-2 rounded-full hover:bg-primary hover-text-white transiton-all" onClick={()=>setIsEdit(false)}>Save Information</button>
          : <button className="con-border bg-gray px-8 py-2 rounded-full hover:bg-primary hover-text-white transiton-all" onClick={()=>setIsEdit(true)}>Edit</button>
        }
      </div>
    </div>
  );
};

export default MyProfile;
