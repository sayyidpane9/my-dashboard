// "use server";
// import React from "react";
// import { EmployeeTable } from "./table";
// import CustomSearch from "@/components/CustomSearch";
// import CustomPerPage from "@/components/CustomPerPage";
// import ImportEmployeeForm from "./employee-import";

// async function page({
//   searchParams,
// }: {
//   searchParams?: {
//     search?: string;
//     division?: string;
//     page?: string;
//     per_page?: string;
//   };
// }) {
//   const search = searchParams?.search || "";
//   const page = Number(searchParams?.page) || 1;
//   const per_page = Number(searchParams?.per_page) || 10;

//   const division = searchParams?.division || "";

//   return (
//     <div className="content-wrapper p-6 shadow-md bg-white">
//       <div className="flex justify-between items-center">
//         <ImportEmployeeForm></ImportEmployeeForm>
//         <div className="flex gap-3">
//           <CustomPerPage></CustomPerPage>
//           <CustomSearch></CustomSearch>
//           {/* <CustomDivisionSearch division={divisionData}></CustomDivisionSearch> */}
//         </div>
//       </div>
//       <EmployeeTable
//         per_page={per_page}
//         division={division}
//         search={search}
//         page={page}
//       ></EmployeeTable>
//     </div>
//   );
// }

// export default page;
