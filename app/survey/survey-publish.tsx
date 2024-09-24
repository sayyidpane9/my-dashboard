// "use client";
// import { PaperPlaneIcon, ReloadIcon, TrashIcon } from "@radix-ui/react-icons";
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
// import { DeleteSurvey, publishSurvey } from "./action";
// export default function SurveyPublis({ id }: { id: string }) {
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
//     const res = await publishSurvey(id);
//     if (res.success) {
//       CustomSuccessAlert("Success publish data");
//       handleClose();
//     } else {
//       CustomSuccessAlert(res.message);
//     }

//     setLoading(false);
//   };
//   return (
//     <>
//       <AlertDialog open={open}>
//         <AlertDialogTrigger asChild>
//           <Button className="bg-blue-600 w-6full" onClick={handleOpen}>
//             <PaperPlaneIcon className=""></PaperPlaneIcon>
//           </Button>
//         </AlertDialogTrigger>
//         <AlertDialogContent>
//           <AlertDialogHeader className="flex justify-between flex-row items-center">
//             <AlertDialogTitle>Publish Survey</AlertDialogTitle>
//             <div className="flex gap-3">
//               <AlertDialogCancel disabled={loading} onClick={handleClose}>
//                 Close
//               </AlertDialogCancel>
//               <AlertDialogAction
//                 disabled={loading}
//                 className="bg-blue-600"
//                 onClick={handleDelete}
//               >
//                 {loading ? (
//                   <>
//                     <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
//                     Publishing...
//                   </>
//                 ) : (
//                   <div className="flex items-center">
//                     <PaperPlaneIcon className="mr-2 h-4 w-4"></PaperPlaneIcon>
//                     Publish
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
