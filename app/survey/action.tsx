// "use server";

// import { sendMailSurvey } from "@/lib/mail";
// import { prisma } from "@/lib/prisma";
// import {
//   createSurveyNoTemplate,
//   getSurveyById,
//   publishedSurvey,
//   removeSurvey,
// } from "@/model/survey.data";
// import { SurveyType } from "@/type/survey.type";
// import { Prisma } from "@prisma/client";
// import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
// import { revalidatePath } from "next/cache";
// import nodemailer from "nodemailer";
// import slugify from "slugify";
// export const DeleteSurvey = async (id: string) => {
//   try {
//     await removeSurvey(id);
//     revalidatePath("/survey");
//     return {
//       success: true,
//       message: "success delete data",
//     };
//   } catch (error) {
//     return {
//       success: false,
//       message: "cannot delete data",
//     };
//   }
// };

// export const publishSurvey = async (id: string) => {
//   try {
//     const survey = await prisma.survey.findFirst({ where: { id: id } });

//     if (!survey) {
//       // Survey not found
//       return {
//         success: false,
//         message: "Survey not found",
//       };
//     }

//     const surveyLink = await getSurveyLink(survey.slug);
//     const url = process.env.BACKEND_URL;
//     const response = await fetch(`${url}/mail`, {
//       // Replace with the actual external API URL
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         survey_id: id,
//         link: surveyLink,
//       }),
//     });

//     if (!response.ok) {
//       return {
//         success: false,
//         message: `External API error`,
//       };
//     }

//     const responseData = await response.json();

//     // Handle success or errors based on the response from the external API
//     if (responseData.success) {
//       return {
//         success: true,
//         message: "Survey published successfully",
//       };
//     } else {
//       return {
//         success: false,
//         message: responseData.message || "Failed to publish survey",
//       };
//     }
//   } catch (error) {
//     if (error instanceof PrismaClientKnownRequestError) {
//       let msg = "";

//       if (error.code == "P2002") {
//         msg = `${(error.meta as { target: string[] }).target} already exist`;
//       } else {
//         msg = error.meta?.message as string;
//       }
//       return {
//         success: false,
//         message: msg,
//       };
//     }
//     console.log(error);
//     return {
//       success: false,
//       message: "something when wrong",
//     };
//   }
// };

// export const UpdateSurvey = async (id: string, data: SurveyType) => {
//   const survey = await prisma.survey.findUnique({ where: { id: id } });
//   if (!survey) {
//     return {
//       success: false,
//       message: "survey not found",
//     };
//   }
//   console.log(new Date());

//   try {
//     const updateData: any = {
//       title: data.title,
//       description: data.description,
//       start_date: data.start_date,
//       end_date: data.end_date,
//     };
//     console.log(updateData);

//     if (survey.title !== data.title) {
//       updateData.slug = slugify(data.title, {
//         lower: true,
//         strict: true,
//       });
//     }

//     await prisma.survey.update({
//       where: { id: id },
//       data: updateData,
//     });
//     revalidatePath("/survey");
//     return {
//       success: true,
//       message: "Survey updated successfully",
//     };
//   } catch (error) {
//     if (error instanceof PrismaClientKnownRequestError) {
//       let msg = "";

//       if (error.code == "P2002") {
//         msg = `${(error.meta as { target: string[] }).target} already exist`;
//       } else {
//         msg = error.meta?.message as string;
//       }
//       return {
//         success: false,
//         message: msg,
//       };
//     }
//     return {
//       success: false,
//       message: "something when wrong",
//     };
//   }
// };
// export const getSurveyLink = async (slug: string) => {
//   return `${process.env.NEXT_PUBLIC_BASE_URL}/quiz/${slug}`;
// };

// export const PostSurvey = async ({
//   title,
//   description,
//   start_date,
//   end_date,
// }: {
//   title: string;
//   description: string;
//   start_date: Date;
//   end_date: Date;
// }) => {
//   try {
//     const start = new Date(start_date);
//     const end = new Date(end_date);

//     const data = await createSurveyNoTemplate({
//       title: title,
//       description: description,
//       start_date: start,
//       end_date: end,
//     });
//     console.log("start_Date", start_date);
//     console.log("start", start);

//     revalidatePath("/survey");

//     return {
//       success: true,
//       message: "success create data",
//     };
//   } catch (error) {
//     if (error instanceof PrismaClientKnownRequestError) {
//       let msg = "";

//       if (error.code == "P2002") {
//         msg = `${(error.meta as { target: string[] }).target} already exist`;
//       } else {
//         msg = error.meta?.message as string;
//       }
//       return {
//         success: false,
//         message: msg,
//       };
//     }
//     console.log(error);
//     return {
//       success: false,
//       message: "something when wrong",
//     };
//   }
// };
