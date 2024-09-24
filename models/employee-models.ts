// import { prisma } from "@/lib/prisma";
// import { Prisma } from "@prisma/client";

// interface emAuth {
//   nrp: string;
//   nama: string;
//   jabatan: string;
//   site: string;
//   usia: number;
//   pendidikan: string;
//   masaKerja: number;
//   jenisKelamin: string;
//   email: string;
//   departement: string;
//   appModule: string;
// }
// export const getEmployeeByEmail = async (email: string) => {
//   return await prisma.employee.findFirst({ where: { email: email } });
// };

// export const paginateEmployee = async (param: {
//   page?: number;
//   per_page?: number;
//   search?: string;
// }) => {
//   const p = param.page ? param.page : 1;
//   const take = param.per_page ? param.per_page : 10;
//   const skip = (p - 1) * take;

//   const whereClause: any = {};

//   if (param.search) {
//     whereClause.OR = [
//       { email: { contains: param.search, mode: "insensitive" } },
//       { name: { contains: param.search, mode: "insensitive" } },
//       { nrp: { contains: param.search, mode: "insensitive" } },
//       { sub_area: { contains: param.search, mode: "insensitive" } },
//     ];
//   }

//   const data = await prisma.employee.findMany({
//     take: take,
//     skip: skip,
//     where: whereClause,
//     orderBy: {
//       created_at: "desc",
//     },
//   });

//   const total = await prisma.employee.count({
//     where: whereClause,
//     orderBy: {
//       created_at: "desc",
//     },
//   });

//   return {
//     data: data,
//     total: Math.ceil(Number(total) / Number(param.per_page)),
//   };
// };

// export const getCountEmployee = async () => {
//   return await prisma.employee.count();
// };
// export const getCountSite = async () => {
//   const distinctSites = await prisma.employee.findMany({
//     distinct: ["sub_area"], // Adjust the field name to match your schema
//     select: {
//       sub_area: true,
//     },
//   });

//   // Return the count of distinct sites
//   return distinctSites.length;
// };

// export const checkEmployee = async ({ data }: { data: emAuth }) => {
//   const em = await prisma.employee.findUnique({
//     where: { nrp: data.nrp.toString() },
//   });
//   if (!em) {
//     const newEm: Prisma.employeeUncheckedCreateInput = {
//       nrp: data.nrp,
//       name: data.nama,
//       position: data.jabatan,
//       sub_area: data.site,
//       age: data.usia,
//       education: data.pendidikan,
//       gender: data.jenisKelamin,
//       email: data.email,
//       departement: data.departement,
//       year_of_service: data.masaKerja,
//     };
//     const store = await prisma.employee.create({
//       data: newEm,
//     });
//     return store;
//   } else {
//     const updateEm: Prisma.employeeUncheckedCreateInput = {
//       nrp: data.nrp,
//       name: data.nama,
//       position: data.jabatan,
//       sub_area: data.site,
//       age: data.usia,
//       education: data.pendidikan,
//       gender: data.jenisKelamin,
//       email: data.email,
//       departement: data.departement,
//       year_of_service: data.masaKerja,
//     };

//     const update = await prisma.employee.update({
//       where: { nrp: data.nrp.toString() },
//       data: updateEm,
//     });
//     return update;
//   }
// };

// export const getEmployeeByNrp = async (nrp: any) => {
//   return await prisma.employee.findFirst({ where: { nrp: nrp } });
// };

// export const getEmployeeById = async (id: any) => {
//   return await prisma.employee.findFirst({ where: { id: id } });
// };

// export const paginateSiteEmployee = async (param: {
//   page?: number;
//   per_page?: number;
//   search?: string;
// }) => {
//   const p = param.page ? param.page : 1;
//   const take = param.per_page ? param.per_page : 10;
//   const skip = (p - 1) * take;

//   const whereClause: any = {};

//   if (param.search) {
//     whereClause.AND = [
//       {
//         OR: [{ sub_area: { contains: param.search, mode: "insensitive" } }],
//       },
//     ];
//   }

//   // First, fetch distinct sites and employee counts
//   const sitesWithEmployeeCount = await prisma.employee.groupBy({
//     by: ["sub_area"], // Assuming 'sub_area' is the column name for sub_area
//     where: whereClause,
//     _count: {
//       sub_area: true, // Count employees per sub_area
//     },
//     orderBy: {
//       _count: {
//         sub_area: "asc", // Order by the count of employees in descending order
//       },
//     },
//     skip: skip,
//     take: take,
//   });

//   // Get the total count of distinct sites
//   const totalSites = await prisma.employee.groupBy({
//     by: ["sub_area"],
//     where: whereClause,
//   });

//   return {
//     data: sitesWithEmployeeCount,
//     total: Math.ceil(totalSites.length / take),
//   };
// };

// export const getSiteParticipant = async () => {
//   const sitesWithEmployeeCount = await prisma.employee.groupBy({
//     by: ["sub_area"], // Assuming 'sub_area' is the column name for sub_area
//     _count: {
//       sub_area: true, // Count employees per sub_area
//     },
//     orderBy: {
//       _count: {
//         sub_area: "asc", // Order by the count of employees in descending order
//       },
//     },
//   });
//   const participant = sitesWithEmployeeCount.map(async (e) => {
//     const part = await prisma.survey_participant.findMany({
//       where: { employee: { sub_area: e.sub_area } },
//       include: {
//         employee: true,
//         survey: true,
//       },
//     });
//     return {
//       area: e.sub_area,
//       total: e._count.sub_area,
//       participant: part.length,
//       participant_answer: part,
//     };
//   });
//   return {
//     data: await Promise.all(participant),
//     total: await prisma.employee.count(),
//   };
// };
