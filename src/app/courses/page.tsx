"use client";
import Image from "next/image";
import React from "react";
import courseData from "@/data/music_courses.json";
import { Table, Tbody, Td, Th, Thead, Tr } from "@/components/ui/table"; // Assuming you're using a UI library

function Page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36 px-4 md:px-12">
      <h1 className="text-lg md:text-4xl text-center font-sans font-bold mb-8 text-white">
      Skills ({courseData.courses.length})
      </h1>

      <div className="overflow-x-auto bg-gray-50 dark:bg-black rounded-xl shadow-lg">
        <Table className="w-full border-collapse text-left">
          {/* Table Head */}
          {/* <Thead className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
            <Tr>
              <Th className="p-4 border-b">Image</Th>
              <Th className="p-4 border-b">Title</Th>
              <Th className="p-4 border-b">Description</Th>
              <Th className="p-4 border-b text-center">Action</Th>
            </Tr>
          </Thead> */}

          {/* Table Body */}
          <Tbody className="text-gray-800 dark:text-gray-200">
            {courseData.courses.map((course, index) => (
              <Tr
                key={index}
                className="hover:bg-gray-200 dark:hover:bg-gray-800 transition-all"
              >
                <Td className="p-4 border-b">
                  <Image
                    src={course.image}
                    height={60}
                    width={100}
                    className="rounded-lg object-cover"
                    alt={course.title}
                  />
                </Td>
                <Td className="p-4 border-b font-bold">{course.title}</Td>
                <Td className="p-4 border-b text-sm">{course.description}</Td>
                <Td className="p-4 border-b text-center">
                  {/* <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-400">
                    Try Now →
                  </button> */}
                  {""}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
}

export default Page;
