// "use client";
// import { ReloadIcon, TrashIcon } from "@radix-ui/react-icons";
// import { Button } from "@/components/ui/button";
// import {
//   AlertDialog,
//   AlertDialogAction,
//   AlertDialogCancel,
//   AlertDialogContent,
//   AlertDialogHeader,
//   AlertDialogTitle,
//   AlertDialogTrigger,
// } from "@/components/ui/alert-dialog";
// import { useState } from "react";
// import { CustomSuccessAlert } from "@/components/CustomSuccessAlert";
// import { CustomErrorAlert } from "@/components/CustomErrorAlert";
// import { DeleteSurvey } from "./action";
// export default function SurveyDelete({ id }: { id: string }) {
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   const handleDelete = async () => {
//     setLoading(true);
//     const res = await DeleteSurvey(id);
//     if (res.success) {
//       CustomSuccessAlert("Success delete data");
//       handleClose();
//     } else {
//       CustomErrorAlert(res.message);
//     }

//     setLoading(false);
//   };
//   return (
//     <>
//       <AlertDialog open={open}>
//         <AlertDialogTrigger asChild>
//           <Button className="bg-red-600" onClick={handleOpen}>
//             <TrashIcon className=""></TrashIcon>
//           </Button>
//         </AlertDialogTrigger>
//         <AlertDialogContent>
//           <AlertDialogHeader className="flex justify-between flex-row items-center">
//             <AlertDialogTitle>Delete Template</AlertDialogTitle>
//             <div className="flex gap-3">
//               <AlertDialogCancel onClick={handleClose}>Close</AlertDialogCancel>
//               <AlertDialogAction className="bg-red-600" onClick={handleDelete}>
//                 {loading ? (
//                   <>
//                     <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
//                     Removing...
//                   </>
//                 ) : (
//                   <div className="flex items-center">
//                     <TrashIcon className="mr-2 h-4 w-4"></TrashIcon>
//                     Remove
//                   </div>
//                 )}
//               </AlertDialogAction>
//             </div>
//           </AlertDialogHeader>
//         </AlertDialogContent>
//       </AlertDialog>
//     </>
//   );
// }
