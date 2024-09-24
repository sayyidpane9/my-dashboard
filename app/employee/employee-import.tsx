// "use client";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { CheckIcon, DownloadIcon, ReloadIcon } from "@radix-ui/react-icons";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { useState } from "react";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogDescription,
//   AlertDialogFooter,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import * as XLSX from "xlsx";
// import { CustomSuccessAlert } from "@/components/CustomSuccessAlert";
// import { EmployeeType } from "@/type/employee.type";
// import { InsertImportedData } from "./action";
// export default function ImportEmployeeForm() {
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     form.reset();
//     setOpen(false);
//   };
//   const FormSchema = z.object({
//     file: z
//       .instanceof(FileList)
//       .refine((fileList) => fileList.length === 1, "File is required."),
//   });

//   async function onSubmit(data: z.infer<typeof FormSchema>) {
//     setLoading(true);
//     try {
//       const file = data.file[0];
//       if (file) {
//         const arrayBuffer = await file.arrayBuffer();
//         const workbook = XLSX.read(new Uint8Array(arrayBuffer), {
//           type: "array",
//         });
//         const sheetName = workbook.SheetNames[0];
//         const worksheet = workbook.Sheets[sheetName];
//         const jsonData = XLSX.utils.sheet_to_json(worksheet) as EmployeeType[];

//         let allEMp: EmployeeType[] = [];
//         for (let i = 0; i < jsonData.length; i++) {
//           const emp = {
//             nrp: jsonData[i].nrp,
//             fullname: jsonData[i].fullname,
//             position: jsonData[i].position,
//             poh: jsonData[i].poh,
//             religious: jsonData[i].religious,
//             contract: jsonData[i].contract,
//             subgroup: jsonData[i].subgroup,
//             subarea: jsonData[i].subarea,
//             birth: jsonData[i].birth,
//             birth_place: jsonData[i].birth_place,
//             identity_number: jsonData[i].identity_number,
//             gender: jsonData[i].gender,
//             age: jsonData[i].age,
//             email: jsonData[i].email,
//             email_secondary: jsonData[i].email_secondary,
//             join_date: jsonData[i].join_date,
//           };
//           allEMp.push(emp);
//         }
//         await InsertImportedData(allEMp);

//         CustomSuccessAlert("Success import data");
//       }
//     } catch (error) {
//       console.error("Error processing file:", error);
//     } finally {
//       setLoading(false);
//       setOpen(false);
//     }
//   }

//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//   });
//   const fileRef = form.register("file");

//   return (
//     <>
//       <AlertDialog open={open}>
//         <AlertDialogTrigger asChild>
//           <Button className="bg-green-600" onClick={handleOpen}>
//             <DownloadIcon className="mr-2 h-4 w-4" /> Import Employee
//           </Button>
//         </AlertDialogTrigger>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Import Employee</AlertDialogTitle>
//             <AlertDialogDescription>
//               <hr className="mb-3 mt-3" />
//               <Form {...form}>
//                 <form
//                   method="POST"
//                   onSubmit={form.handleSubmit(onSubmit)}
//                   className=""
//                 >
//                   <FormField
//                     control={form.control}
//                     name="file"
//                     render={({ field }) => (
//                       <FormItem className="mb-4">
//                         <FormLabel className="font-bold">File</FormLabel>
//                         <FormControl>
//                           <Input
//                             accept=".xlsx"
//                             type="file"
//                             placeholder="Upload file"
//                             {...fileRef}
//                             onChange={(event) => {
//                               field.onChange(
//                                 event.target?.files?.[0] ?? undefined
//                               );
//                             }}
//                           />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </form>
//               </Form>
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel disabled={loading} onClick={handleClose}>
//               Close
//             </AlertDialogCancel>
//             <AlertDialogAction
//               disabled={loading}
//               onClick={form.handleSubmit(onSubmit)}
//             >
//               {loading ? (
//                 <>
//                   <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
//                   Importing...
//                 </>
//               ) : (
//                 <div className="flex items-center">
//                   <CheckIcon className="mr-2 h-4 w-4" />
//                   Import
//                 </div>
//               )}
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </>
//   );
// }
