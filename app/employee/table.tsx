// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableFooter,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table";
//   import { paginateEmployee } from "@/model/employee.models";
//   import CustomPagination from "@/components/CustomPagination";
//   import { EyeIcon } from "lucide-react";
//   import { EyeOpenIcon } from "@radix-ui/react-icons";
//   import { Button } from "@/components/ui/button";
//   import Link from "next/link";
  
//   export async function EmployeeTable({
//     search,
//     page,
//     per_page,
//   }: {
//     search: string;
//     page: number;
//     division: string;
//     per_page: number;
//   }) {
//     const { data, total } = await paginateEmployee({
//       page: Number(page),
//       per_page: Number(per_page),
//       search: search,
//     });
  
//     return (
//       <>
//         <Table className="border border-collapse mt-5">
//           <TableHeader>
//             <TableRow>
//               <TableHead className="border font-bold text-center border-r-1 w-[50px]">
//                 No
//               </TableHead>
//               <TableHead className="border font-bold text-center border-r-1">
//                 NRP
//               </TableHead>
//               <TableHead className="border font-bold text-center border-r-1">
//                 Name
//               </TableHead>
//               <TableHead className="border font-bold text-center border-r-1">
//                 Email
//               </TableHead>
//               <TableHead className="border font-bold text-center border-r-1">
//                 Site
//               </TableHead>
//               <TableHead className="border font-bold text-center border-r-1">
//                 Posititon
//               </TableHead>
//               <TableHead className="border font-bold text-center border-r-1">
//                 Age
//               </TableHead>
  
//               <TableHead className="border font-bold text-center border-r-1">
//                 Pendidikan
//               </TableHead>
  
//               <TableHead className="border font-bold text-center border-r-1">
//                 Gender
//               </TableHead>
  
//               <TableHead className="border font-bold text-center border-r-1">
//                 Action
//               </TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {data.length === 0 ? (
//               <TableRow>
//                 <TableCell colSpan={8} className="border text-center">
//                   No employees found
//                 </TableCell>
//               </TableRow>
//             ) : (
//               data.map((data, index) => (
//                 <TableRow key={data.id}>
//                   <TableCell className="border text-center border-r-1">
//                     {index + 1}
//                   </TableCell>
//                   <TableCell className="border text-center border-r-1">
//                     {data.nrp}
//                   </TableCell>
//                   <TableCell className="border text-center border-r-1">
//                     {data.name}
//                   </TableCell>
//                   <TableCell className="border text-center border-r-1">
//                     {data.email}
//                   </TableCell>
//                   <TableCell className="border text-center border-r-1">
//                     {data.sub_area}
//                   </TableCell>
//                   <TableCell className="border text-center border-r-1">
//                     {data.position}
//                   </TableCell>
//                   <TableCell className="border text-center border-r-1">
//                     {data.age}
//                   </TableCell>
//                   <TableCell className="border text-center border-r-1">
//                     {data.education}
//                   </TableCell>
//                   <TableCell className="border text-center border-r-1">
//                     {data.gender}
//                   </TableCell>
//                   <TableCell className="border text-center border-r-1">
//                     <Link href={`/employee/${data.nrp}`}>
//                       <Button>
//                         <EyeIcon></EyeIcon>
//                       </Button>
//                     </Link>
//                   </TableCell>
//                 </TableRow>
//               ))
//             )}
//           </TableBody>
//           <TableFooter></TableFooter>
//         </Table>
//         <div className="flex justify-end items-center m-3 pr-3 w-full">
//           <CustomPagination totalPages={total}></CustomPagination>
//         </div>
//       </>
//     );
//   }
  