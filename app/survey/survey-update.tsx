// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { CalendarIcon, Pencil1Icon, ReloadIcon } from "@radix-ui/react-icons";
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
// import { CustomSuccessAlert } from "@/components/CustomSuccessAlert";
// import { CustomErrorAlert } from "@/components/CustomErrorAlert";
// import { SurveyType } from "@/type/survey.type";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { format } from "date-fns";
// import { Calendar } from "@/components/ui/calendar";
// import { cn } from "@/lib/utils";
// import { UpdateSurvey } from "./action";
// export default function SurveyUpdateForm(props: { survey: SurveyType }) {
//   const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };
//   function adjustDateToTimeZone(date, offsetHours) {
//     // Adjust date by adding/subtracting the offset
//     const offsetMs = offsetHours * 60 * 60 * 1000;
//     return new Date(date.getTime() + offsetMs);
//   }

//   const FormSchema = z.object({
//     title: z.string().min(1, {
//       message: "title is required",
//     }),

//     description: z.string().min(1, {
//       message: "description is required",
//     }),
//     start_date: z.date({
//       required_error: "Start date is required",
//     }),
//     end_date: z.date({
//       required_error: "End date is required",
//     }),
//   });
//   async function onSubmit(data: z.infer<typeof FormSchema>) {
//     const d = {
//       title: data.title,
//       description: data.description,
//       start_date: adjustDateToTimeZone(data.start_date, 7),
//       end_date: adjustDateToTimeZone(data.end_date, 7),
//     };
//     setLoading(true);
//     const patch = await UpdateSurvey(props.survey.id, d as any);
//     if (patch.success) {
//       CustomSuccessAlert("Success update survey");
//       form.reset();
//       handleClose();
//     } else {
//       CustomErrorAlert(patch.message);
//     }
//     setLoading(false);
//   }
//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       title: props.survey.title,
//       description: props.survey.description,
//       start_date: props.survey.start_date,
//       end_date: props.survey.end_date,
//     },
//   });

//   return (
//     <>
//       <AlertDialog open={open}>
//         <AlertDialogTrigger asChild>
//           <Button className="bg-gray-600" onClick={handleOpen}>
//             <Pencil1Icon className="" />
//           </Button>
//         </AlertDialogTrigger>
//         <AlertDialogContent>
//           <AlertDialogHeader>
//             <AlertDialogTitle>Update Division</AlertDialogTitle>
//             <AlertDialogDescription>
//               <hr className="mb-3 mt-3" />
//               <Form {...form}>
//                 <form
//                   method="POST"
//                   onSubmit={form.handleSubmit(onSubmit)}
//                   className="w-full"
//                 >
//                   <FormField
//                     control={form.control}
//                     name="title"
//                     render={({ field }) => (
//                       <FormItem className="mb-4">
//                         <FormLabel className="font-bold">Title</FormLabel>
//                         <FormControl>
//                           <Input placeholder="Title" {...field} />
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="description"
//                     render={({ field }) => (
//                       <FormItem className="mb-4">
//                         <FormLabel className="font-bold">Description</FormLabel>
//                         <FormControl>
//                           {/* <Textarea placeholder="Survey Name" {...field} /></Textarea> */}
//                           <Textarea
//                             placeholder="Description"
//                             {...field}
//                           ></Textarea>
//                         </FormControl>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                   <FormField
//                     control={form.control}
//                     name="start_date"
//                     render={({ field }) => (
//                       <FormItem className="mb-4">
//                         <FormLabel className="font-bold">Start Date</FormLabel>
//                         <Popover modal={true}>
//                           <PopoverTrigger asChild>
//                             <FormControl>
//                               <Button
//                                 variant={"outline"}
//                                 className={cn(
//                                   "w-full pl-3 text-left font-normal",
//                                   !field.value && "text-muted-foreground"
//                                 )}
//                               >
//                                 {field.value ? (
//                                   format(field.value, "PPP")
//                                 ) : (
//                                   <span>Pick a date</span>
//                                 )}
//                                 <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                               </Button>
//                             </FormControl>
//                           </PopoverTrigger>
//                           <PopoverContent
//                             className="w-auto p-0 absolute"
//                             align="start"
//                           >
//                             <Calendar
//                               mode="single"
//                               selected={field.value}
//                               onSelect={field.onChange}
//                               // disabled={(date) =>
//                               //   date > new Date() || date < new Date("1900-01-01")
//                               // }
//                               initialFocus
//                             />
//                           </PopoverContent>
//                         </Popover>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                   <FormField
//                     control={form.control}
//                     name="end_date"
//                     render={({ field }) => (
//                       <FormItem className="mb-4 flex flex-col justify-between">
//                         <FormLabel className="font-bold">End Date</FormLabel>
//                         <Popover modal={true}>
//                           <PopoverTrigger className="" asChild>
//                             <FormControl>
//                               <Button
//                                 variant={"outline"}
//                                 className={cn(
//                                   "w-full pl-3 text-left font-normal",
//                                   !field.value && "text-muted-foreground"
//                                 )}
//                               >
//                                 {field.value ? (
//                                   format(field.value, "PPP")
//                                 ) : (
//                                   <span>Pick a date</span>
//                                 )}
//                                 <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                               </Button>
//                             </FormControl>
//                           </PopoverTrigger>
//                           <PopoverContent className="w-full p-0" align="start">
//                             <Calendar
//                               className="w-full"
//                               mode="single"
//                               selected={field.value}
//                               onSelect={field.onChange}
//                               // disabled={(date) =>
//                               //   date > new Date() || date < new Date("1900-01-01")
//                               // }
//                               initialFocus
//                             />
//                           </PopoverContent>
//                         </Popover>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />
//                 </form>
//               </Form>
//             </AlertDialogDescription>
//           </AlertDialogHeader>
//           <AlertDialogFooter>
//             <AlertDialogCancel onClick={handleClose}>Close</AlertDialogCancel>
//             <AlertDialogAction
//               className="bg-gray-600"
//               onClick={form.handleSubmit(onSubmit)}
//             >
//               {loading ? (
//                 <>
//                   <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
//                   Updating...
//                 </>
//               ) : (
//                 <div className="flex items-center">
//                   <Pencil1Icon className="mr-2 h-4 w-4" />
//                   Update
//                 </div>
//               )}
//             </AlertDialogAction>
//           </AlertDialogFooter>
//         </AlertDialogContent>
//       </AlertDialog>
//     </>
//   );
// }
