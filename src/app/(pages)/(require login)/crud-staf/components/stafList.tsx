"use client";

import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

function StafList({ header }: { header: any[] }) {
  const [fetchError, setFetchError] = useState(null);
  const [stafPengiriman, setStafPengiriman] = useState(null);
  const [dataItem, setDataItem] = useState<any[]>([]);

  const handleClick = (item: any) => {
    console.log(item);
  };

  useEffect(() => {
    const fetchStafPengiriman = async () => {
      try {
        // const cookieStore = cookies()
        // const supabase = createClient(cookieStore);
        const supabase = createClient();
        // const user = supabase.auth.getUser()
        // console.log(user);

        const { data: users, error } = await supabase.from("users").select();

        if (users) {
          setDataItem(users);
        }

        // console.log('Accounts:', accounts);
        // console.log('Error:', error);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchStafPengiriman();
  }, []);

  const spUsers = dataItem.filter((user) => user.role === "SP");

  return (
    <div className="w-full mt-[23.54px] lg:mt-[30px] lg:w-[70vw] mx-auto">
      <table className="w-full">
        <thead className="border-b-[1px] border-black">
          <tr>
            {header.map((item, idx) => {
              return (
                <th
                  key={idx}
                  className="w-auto h-auto font-montserrat font-semibold text-black text-center pb-[8px] text-[10px] lg:text-[20px]"
                >
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {spUsers.map((staf) => {
            return (
              <tr
                key={staf.id}
                className="border-b-[1px] border-black border-opacity-30"
              >
                <td className="overflow-hidden w-auto h-auto py-[24px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{staf.id}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[24px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{staf.nama}</div>
                </td>
                <td className="overflow-hidden w-auto h-auto py-[24px] text-[10px] lg:text-[16px] xl:text-[20px] text-center">
                  <div>{staf.alamat}</div>
                </td>
                <td className="flex justify-center w-auto h-auto py-[24px]">
                  <Link
                    onClick={() => handleClick(staf)}
                    href={`/crud-staf/${staf.id}`}
                    className="hover:shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] flex rounded-[7.145px] w-[12.77vw] px-[14.29px] py-[4.76px] lg:w-[04.94vw] lg:px-[1px] lg:py-[5px] lg:rounded-[15px] justify-center border-[#6C88CD] border-[3px]"
                  >
                    <h6 className="text-[#6C88CD] text-montserrat text-semibold text-[8.574px] lg:text-[18px]">
                      Edit
                    </h6>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StafList;

export const users = [
  {
    id: 1,
    username: "user1",
    password: "password1",
    name: "User One",
    tanggallahir: "1990-01-15",
    noTelp: "123-456-7890",
    alamat: "123 Main St, City, Country",
    role: "SP",
  },
  {
    id: 2,
    username: "user2",
    password: "password2",
    name: "User Two",
    tanggallahir: "1985-05-20",
    noTelp: "987-654-3210",
    alamat: "456 Elm St, Town, Country",
    role: "MO",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "MO",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "MO",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "SP",
  },
  {
    id: 3,
    username: "user3",
    password: "password3",
    name: "User Three",
    tanggallahir: "1995-10-25",
    noTelp: "123-456-7890",
    alamat: "789 Oak St, Village, Country",
    role: "MO",
  },
];